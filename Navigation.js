import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Note: Pages
import PageOne from './PageOne'

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      
        <Stack.Screen 
          name="PageOne" 
          component={PageOne}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}