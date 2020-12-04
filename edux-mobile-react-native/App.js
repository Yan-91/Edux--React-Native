import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home'
import Indisponivel from './pages/Indisponivel'
import Timeline from './pages/Timeline';
import Alunos from './pages/Alunos';
import Turmas from './pages/Turmas';


import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const Autenticado = () => {
  return(
    <Tab.Navigator style={styles.navigation} initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Alunos" component={Alunos} />
      <Tab.Screen name="Timeline" component={Timeline} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }} initialRouteName="Timeline">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Indisponivel" component={Indisponivel} />
        <Stack.Screen name="Timeline" component={Timeline} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alunos" component={Alunos} />
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigation: {
      flexDirection : "row",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#00D65F",
  },
});
