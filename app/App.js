import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import HomeScreen  from './HomeScreen';
import ItemScreen from './ItemScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

registerRootComponent(App);
