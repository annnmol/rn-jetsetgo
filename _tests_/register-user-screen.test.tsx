import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import RegisterUserScreen from "../app/screens/auth-flow/register-user-screen";
import { NavigationProp } from "@react-navigation/native";

type NavigationType = NavigationProp<any>; 

const navigationMock: any = {
  navigate: jest.fn(),
};

// Mock ToastAndroid
jest.mock(
  "react-native/Libraries/Components/ToastAndroid/ToastAndroid",
  () => ({
    show: jest.fn(),
  })
);

describe("RegisterUserScreen", () => {
  it('renders component correctly and creates account when "Create Account" button is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(
      <RegisterUserScreen navigation={navigationMock} />
    );

    // Check if the component is rendered
    const title = getByText("What's your name?");
    expect(title).toBeTruthy();

    // Enter full name and continue
    const fullNameInput = getByPlaceholderText("Anmol Tanwar");
    fireEvent.changeText(fullNameInput, "John Doe");
    let continueButton = getByText("Continue");
    fireEvent.press(continueButton);

    // Wait for the email input field to become available
    await waitFor(() => {
      expect(getByPlaceholderText("anmol@hi2.in")).toBeTruthy();
    });

    const emailInput = getByPlaceholderText("anmol@hi2.in");
    fireEvent.changeText(emailInput, "test@example.com");
    continueButton = getByText("Continue");

    fireEvent.press(continueButton);

    await waitFor(() => {
      expect(getByPlaceholderText("123456")).toBeTruthy();
    });

    const passwordInput = getByPlaceholderText("123456");
    fireEvent.changeText(passwordInput, "password");
    continueButton = getByText("Create Account");

    fireEvent.press(continueButton);

    //   // Check if the navigation is called with the correct screen name
    expect(navigationMock.navigate).toHaveBeenCalledWith("welcome-screen");
  });

  it('navigates back to welcome screen when "Back" button is pressed', () => {
    const { getByText } = render(
      <RegisterUserScreen navigation={navigationMock} />
    );

    // Press the "Back" button
    const backButton = getByText("Back");
    fireEvent.press(backButton);

    // Check if the navigation is called with the correct screen name
    expect(navigationMock.navigate).toHaveBeenCalledWith("welcome-screen");
  });
});
