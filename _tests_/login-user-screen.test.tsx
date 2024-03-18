import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoginUserScreen from '../app/screens/auth-flow/login-user-screen';
import { NavigationProp } from '@react-navigation/native';

// Define the navigation prop type
type NavigationType = NavigationProp<any>; // Update with your navigation type

// Create a mock navigation object
const navigationMock: any = {
  navigate: jest.fn(),
};

// Mock ToastAndroid
jest.mock('react-native/Libraries/Components/ToastAndroid/ToastAndroid', () => ({
    show: jest.fn(),
  }));
  

describe('LoginUserScreen', () => {
  it('renders component correctly and logs in when "Login" button is pressed', () => {
    const { getByText, getByPlaceholderText } = render(<LoginUserScreen navigation={navigationMock} />);
    
    // Check if the component is rendered
    const title = getByText('Welcome Back!');
    expect(title).toBeTruthy();

    // Check if email and password fields are present
    const emailInput = getByPlaceholderText('anmol@hi2.in');
    expect(emailInput).toBeTruthy();
    const passwordInput = getByPlaceholderText('123456');
    expect(passwordInput).toBeTruthy();

    // Simulate entering email and password
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');

    // Press the "Login" button
    const loginButton = getByText('Login');
    fireEvent.press(loginButton);

    // Check if the navigation is called with the correct screen name
    expect(navigationMock.navigate).toHaveBeenCalledWith('welcome-screen');
  });

  it('navigates back to welcome screen when "Back" button is pressed', () => {
    const { getByText } = render(<LoginUserScreen navigation={navigationMock} />);
    
    // Press the "Back" button
    const backButton = getByText('Back');
    fireEvent.press(backButton);

    // Check if the navigation is called with the correct screen name
    expect(navigationMock.navigate).toHaveBeenCalledWith('welcome-screen');
  });
});
