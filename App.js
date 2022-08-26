import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Browse from './src/Pages/DefaultView/Browse';
import Profile from './src/Pages/DefaultView/Profile';
import VolunteerSignUp from './src/Pages/DefaultView/VolunteerSignUp';
import OrgSignUp from './src/Pages/DefaultView/OrgSignUp';
import SignIn from './src/Pages/DefaultView/SignIn';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="VolunteerSignUp" component={VolunteerSignUp} />
        <Tab.Screen name="OrgSignUp" component={OrgSignUp} />
        <Tab.Screen name="SignIn" component={SignIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}