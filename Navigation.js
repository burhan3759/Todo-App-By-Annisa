import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text } from 'react-native'

// Note: Pages
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Userlist from './Userlist'
import UserDetail from './UserDetail'

const Stack = createStackNavigator();

const initialPage = 'Userlist'

export default App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName={initialPage}
      >
      
        <Stack.Screen 
          name="PageOne" 
          component={PageOne}
          options={{
            title: 'Home Page'
          }}
        />

        <Stack.Screen 
          name="PageTwo" 
          component={PageTwo}
        />

        <Stack.Screen 
          name="PageThree" 
          component={PageThree}
        />

        <Stack.Screen 
          name="Userlist" 
          component={Userlist}
        />

        <Stack.Screen 
          name="UserDetail" 
          component={UserDetail}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}