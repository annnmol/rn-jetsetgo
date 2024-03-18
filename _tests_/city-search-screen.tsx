import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CitySearchScreen from '@/screens/home-tab/city-search-screen';
import CitySearchResults from '@/components/home/city-search-results';

// Mock navigation object
const navigationMock: any = {
  navigate: jest.fn(),
};

describe('CitySearchScreen', () => {
  it('calls handleClick with item city string of length 1 greater than 0', () => {
    const { getByPlaceholderText } = render(<CitySearchScreen navigation={navigationMock} />);
    
    const inputField = getByPlaceholderText('Jaipur');
    fireEvent.changeText(inputField, 'Mumbai');

    const filtredCitiesMock:any = [{ id: 1,
        city: "Mumbai",
        airportCode: "BOM",
        image: "https://source.unsplash.com/featured/?mumbai,heritage",}];

    const handleClickMock = jest.fn();

    // Render the component with filtered data and mocked handleClick function
    const { getByTestId } = render(
      <CitySearchResults
        // navigation={navigationMock}
        filteredData={filtredCitiesMock}
        onPress={handleClickMock}
      />
    );

    // Find and press the search result item
    const searchResultItem = getByTestId('city-search-results');
    fireEvent.press(searchResultItem);

    // Assert whether handleClick is called with the expected city string
    expect(handleClickMock).toHaveBeenCalledWith(expect.anything(), filtredCitiesMock[0]);
  });
});
