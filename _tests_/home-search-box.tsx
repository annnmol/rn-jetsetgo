import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NavigationProp } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import HomeSearchBox from '@/components/home/home-search-box';

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

describe('HomeSearchBox', () => {
  it('shows toast message if either origin or destination city is missing', () => {
    const { getByText } = render(<HomeSearchBox />);

    // Simulate clicking on the "Search Flights" button
    const searchButton = getByText('Search Flights');
    fireEvent.press(searchButton);

    // Check if the toast message is shown
    expect(ToastAndroid.show).toHaveBeenCalledWith(
      'Please select origin and destination cities to proceed.',
      ToastAndroid.SHORT
    );
  });

  it('navigates to the search screen if both origin and destination cities are present', () => {
    const { getByText } = render(<HomeSearchBox />);
    
    // Mocking the current and destination cities
    const originCity = 'New York';
    const destinationCity = 'Los Angeles';

    // Simulate setting origin and destination cities
    fireEvent.changeText(getByText('Enter Origin'), originCity);
    fireEvent.changeText(getByText('Enter Destination'), destinationCity);

    // Simulate clicking on the "Search Flights" button
    const searchButton = getByText('Search Flights');
    fireEvent.press(searchButton);

    // Check if the navigation is called with the correct screen name
    // You might need to adjust this based on your actual navigation implementation
    expect(navigationMock.navigate).toHaveBeenCalledWith('search-screen');
  });
});
