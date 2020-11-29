import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Timeline from './pages/Timeline';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }} initialRouteName="Timeline">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Timeline" component={Timeline} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

