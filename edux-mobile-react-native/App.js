import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './pages/Home'
import Indisponivel from './pages/Indisponivel'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Autenticado = () => {
  return(
    <Tab.Navigator style={styles.navigation} initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Objetivo" component={Indisponivel} />
      <Tab.Screen name="Turmas" component={Indisponivel} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        {/* <Stack.Screen name="Login" component={Indisponivel} /> 
        <Stack.Screen name="Cadastro" component={Indisponivel} /> */}
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
