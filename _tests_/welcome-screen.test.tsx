import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import WelcomeScreen from "../app/screens/auth-flow/welcome-screen";
import { NavigationProp } from "@react-navigation/native";

// Define the navigation prop type
type NavigationType = NavigationProp<any>; // Update with your navigation type

// Create a mock navigation object
const navigationMock: any = {
  navigate: jest.fn(),
};
describe("welcome-screen", () => {
  it("renders component and image correctly", () => {
    const { getByText, getByTestId } = render(
      <WelcomeScreen navigation={navigationMock} />
    );
      
    // Check if the image is rendered
    const image = getByTestId("welcome-image");
    expect(image).toBeTruthy();

    // Check if the text "Welcome to JetSetGo" is present
    const welcomeText = getByText("Welcome to JetSetGo");
    expect(welcomeText).toBeTruthy();
  });

  it('navigates to sign up screen when "Join Us Now" button is pressed', () => {
    const { getByText } = render(<WelcomeScreen navigation={navigationMock} />);
    const createAccountButton = getByText("Join Us Now");
    fireEvent.press(createAccountButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith(
      "register-user-screen"
    );
  });
});
