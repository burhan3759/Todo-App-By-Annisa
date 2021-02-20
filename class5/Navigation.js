import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Note: Pages
import MatchList from './MatchList'
import MatchWinner from './MatchWinner'

const Stack = createStackNavigator();

const initialPage = 'MatchList'

export default App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName={initialPage}
      >
        <Stack.Screen 
          name="MatchList" 
          component={MatchList}
        />
        <Stack.Screen 
          name="MatchWinner" 
          component={MatchWinner}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}