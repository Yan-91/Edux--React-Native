import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Header from '../../components/Header'
import { FlatList } from 'react-native-gesture-handler'
import Typo from '../../components/Typo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemObjetivo from '../../components/itemObjetivo';

const Objetivo = ({ navigation }) =>{

  const [objetivos, setObjetivos] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@jwt')
            .then(data => {
                setToken(data)
            })

    listarObjetivos();
}, []);

let boldTittle = (text) => (
  <Typo type="bold" text={text} color="#9100d5" size="24px" />
)


const listarObjetivos = () => {
  fetch('http://192.168.7.161:5000/api/Objetivo', {
      headers: {
        'Content-Type': 'application/json',
        'Authentication': 'Bearer ' + token
      }
  })

  .then(response => response.json())

  .then(dados => {
      setObjetivos(dados)
      console.log(data);
  })
  .catch(err => console.error(err));
}

const renderItem = ({item}) => {
  console.log(item);
  return(
      <ItemObjetivo
          descricao = {item.descricao}
      />
  )
}
    return(
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.centerText}>
                {boldTittle("OBJETIVOS")}

            </View>
            <FlatList
                      keyExtractor={item => item.id}
                      data={objetivos} 
                      renderItem={renderItem} 
            />
        </View>
    )
}

export default Objetivo;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'start',
  },
  centerText: {
      marginTop: 100,
      textAlign: 'center'
  }
});