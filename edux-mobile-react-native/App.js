import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home'
import Indisponivel from './pages/Indisponivel'
import Timeline from './pages/Timeline';
import Alunos from './pages/Alunos';
import Turmas from './pages/Turmas';
import Objetivo from './pages/Objetivos';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSchool, faChalkboardTeacher, faGraduationCap, faList, faMale } from '@fortawesome/free-solid-svg-icons'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
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
          tabBarIcon: ({ color }) => 
            <FontAwesomeIcon icon={faSchool} color={color} size={26} />
          }}
      />
      <Tab.Screen name="Turmas" 
        component={Turmas} 
        options={{
          tabBarLabel: 'Turmas',
          tabBarIcon: ({ color }) => 
            <FontAwesomeIcon icon={faChalkboardTeacher} color={color} size={26} />   
          }}
      />
      <Tab.Screen name="Objetivos" 
        component={Objetivo} 
        options={{
          tabBarLabel: 'Objetivos',
          tabBarIcon: ({ color }) => 
            <FontAwesomeIcon icon={faGraduationCap} color={color} size={26} />
          }}
      />
      <Tab.Screen name="Timeline" 
        component={Timeline} 
        options={{
          tabBarLabel: 'Timeline',
          tabBarIcon: ({ color }) => 
            <FontAwesomeIcon icon={faList} color={color} size={26} />
          }}
      />
      <Tab.Screen name="Alunos" 
        component={Alunos} 
        options={{
          tabBarLabel: 'Alunos',
          tabBarIcon: ({ color }) => 
            <FontAwesomeIcon icon={faMale} color={color} size={26} />
          }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        {/* {<Stack.Screen name="Login" component={Login} />} */}
        <Stack.Screen name="Autenticado" component={Autenticado} />
        <Stack.Screen name="Indisponivel" component={Indisponivel} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}


import { useFonts } from 'expo-font';

const Logout = ( {navigation} ) => {
  let [fontsLoaded] = useFonts({
    'TitilliumWeb_900Black': require('./assets/fonts/TitilliumWeb_900Black.ttf'),
    'TitilliumWeb_400Regular': require('./assets/fonts/TitilliumWeb_400Regular.ttf'),
    'TitilliumWeb_700Bold': require('./assets/fonts/TitilliumWeb_700Bold.ttf'),
  });

  return(
    <View style={styles.logout}>
      <Text style={styles.text}>Deseja realmente sair da aplicação?</Text>
      <Button color={"#9200D6"} onPress={() => {
        AsyncStorage.removeItem('@jwt');
        navigation.push('Login');
      }} title='SAIR'></Button>

      <Button color={"#9200D6"} onPress={() => 
        navigation.navigate('Home')} title='CANCELAR'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
      flexDirection : "row",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#00D65F",
  },

  logout: {
    flex : 1,
    position : 'relative',
    top : 100,
    marginTop: 30,
    padding : 10,
},

text: {
  textAlign:'center',
  fontWeight: 'bold',
  fontFamily: 'TitilliumWeb_400Regular',
  fontSize:14
},
});
