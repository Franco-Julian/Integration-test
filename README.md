# HomeScreen Integration Test Project

This project demonstrates the integration testing of a React Native `HomeScreen` component, focusing on testing the functionality of a modal and navigation without mocking the navigation. The purpose of this project is to provide a practical example of how to test complex user interactions and navigation in a React Native application.

## Project Overview

The main component in this project is `HomeScreen`. This component includes:
- A button that navigates to an `ItemScreen`.
- A button that opens a modal.
- A modal that contains a text message and a button to close the modal.

### Component: HomeScreen

The `HomeScreen` component is designed as follows:

- It has two main buttons: one for navigation and one for opening the modal.
- When the modal is open, it displays a message and a button to close it.

### Integration Tests

The project includes integration tests to verify the functionality of the `HomeScreen` component using `@testing-library/react-native`. These tests cover:
1. Opening and closing the modal.
2. Navigating to `ItemScreen`.

### Tests Description

The tests are grouped under a `describe` block to clearly indicate that they are testing the `HomeScreen` component.

#### 1. Modal Functionality

- **Test:** Opens the modal and verifies its presence.
- **Test:** Presses the internal button within the modal to close it and verifies that the modal is no longer visible.

#### 2. Navigation to ItemScreen

- **Test:** Presses the button to navigate to `ItemScreen`.
- **Test:** Verifies the navigation by checking for the presence of an element on `ItemScreen`.
