import App from '../App';
import React from 'react';
import { render } from '@testing-library/react-native';

// Mock SplashScreen methods to prevent auto hide
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

// Mock enableScreens method
jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
}));

// Mock useAppStore hook
jest.mock('@/store/app-store', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    loading: false,
    authSession: { email: 'test@example.com', password: "123456", fullName: "Anmol" }, // Assuming user is logged in
    persist: {
      onFinishHydration: jest.fn((callback: Function) => {
        // Manually invoke the callback function
        callback();
      }),
    },
  })),
}));

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
