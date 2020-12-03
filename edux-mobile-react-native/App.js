import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home'
import Indisponivel from './pages/Indisponivel'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timeline from './pages/Timeline';
import Alunos from './pages/Alunos';
import Turmas from './pages/Turmas';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Autenticado = () => {
  return(
    <Tab.Navigator style={styles.navigation} initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Objetivo" component={Indisponivel} />
      <Tab.Screen name="Turmas" component={Turmas} />
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Alunos" component={Alunos} />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        {<Stack.Screen name="Login" component={Login} />}
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigation: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: "#fff",
  },
});
