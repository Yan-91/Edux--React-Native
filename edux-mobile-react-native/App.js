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

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSchool, faChalkboardTeacher, faGraduationCap, faList } from '@fortawesome/free-solid-svg-icons'

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

    <Tab.Navigator 
      shifting={true}
      activeColor="#fff"
      barStyle={styles.navigation} 
      initialRouteName='Home'>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faSchool} color={color} size={26} />
            ),
          }}
      />
      <Tab.Screen name="Turmas" 
        component={Indisponivel} 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faChalkboardTeacher} color={color} size={26} />
            ),
          }}
      />
      <Tab.Screen name="Objetivos" 
        component={Indisponivel} 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faGraduationCap} color={color} size={26} />
            ),
          }}
      />
      <Tab.Screen name="Timeline" 
        component={Timeline} 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faList} color={color} size={26} />
            ),
          }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        {<Stack.Screen name="Login" component={Login} />}
        <Stack.Screen name="Autenticado" component={Autenticado} />
        <Stack.Screen name="Indisponivel" component={Indisponivel} />
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
