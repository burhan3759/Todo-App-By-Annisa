import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Note: Pages

import KeyboardAvoidViewTest from './KeyboardAvoidViewTest'
import FormData from './FormData'

const Stack = createStackNavigator();

const initialPage = 'KeyboardAvoidViewTest'

export default App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName={initialPage}
      >
      
        <Stack.Screen 
          name="KeyboardAvoidViewTest" 
          component={KeyboardAvoidViewTest}
        />

        <Stack.Screen 
          name="FormData" 
          component={FormData}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}