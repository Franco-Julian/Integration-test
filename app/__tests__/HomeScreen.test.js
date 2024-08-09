import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import ItemScreen from '../ItemScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from '../redux/store';

const Stack = createNativeStackNavigator();

const renderWithNavigation = () => {
  return render(
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
    </Stack.Navigator>
  </NavigationContainer>
</Provider>
  );
};

describe('HomeScreen', () => {
  test('opens and closes the modal', async () => {
    const { getByTestId, queryByTestId } = renderWithNavigation();

    // Open the modal
    fireEvent.press(getByTestId('modalButton'));
    expect(getByTestId('modal')).toBeTruthy();

    // Access the internal button and close the modal
    fireEvent.press(getByTestId('closeModalButton'));
    await waitFor(() => {
      expect(queryByTestId('modal')).toBeNull();
    });
  });

  test('navigates to ItemScreen', async () => {
    const { getByTestId, findByText } = renderWithNavigation();

    // Press the button to navigate
    fireEvent.press(getByTestId('goToItem'));

    // Verify navigation by checking for the presence of an element on the ItemScreen
    expect(await findByText('Item Screen')).toBeTruthy();
  });
});
