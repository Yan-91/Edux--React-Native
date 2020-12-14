import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Header from '../../components/Header'
import { FlatList } from 'react-native-gesture-handler'


import { Card, Title, Paragraph } from 'react-native-paper';

const Objetivo = () =>{
  useEffect(() => {
    listarObjetivos();
},[])


  const ItemObjetivo = ({descricao}) => {
    return (
        <View style={styles.listItem}>
            <View style={{alignItems:"center"}}>
                <Text>{descricao}</Text>
            </View>
        </View>
    )
}

  const [objetivos, setObjetivos] = useState([]);
  

const listarObjetivos = () => {
  fetch('http://192.168.0.34:5000/api/Objetivo')
  .then(response => response.json())
  .then(dados => {
      setObjetivos(dados);
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
        <View>
            <Header/>
            <View style={styles.Container}>
            <Text style={styles.tituloObjetivo}> OBJETIVOS</Text>
            <FlatList style={styles.styleObjetivo}
        data={objetivos} 
        renderItem={renderItem} 
        />
         <Card style={styles.CardObjetivo}>
            < Card.Content>
            <Title>Objetivo 1</Title>
            <Paragraph>descricao</Paragraph>
            </Card.Content>
            </Card>
            <Card style={styles.CardObjetivo}>
            < Card.Content>
            <Title>Objetivo 2</Title>
            <Paragraph>descricao</Paragraph>
            </Card.Content>
            </Card>
            <Card style={styles.CardObjetivo}>
            < Card.Content>
            <Title>Objetivo 3</Title>
            <Paragraph>descricao</Paragraph>
            </Card.Content>
            </Card>
            <Card style={styles.CardObjetivo}>
            < Card.Content>
            <Title>Objetivo 4</Title>
            <Paragraph>descricao</Paragraph>
            </Card.Content>
            </Card>
            <Card style={styles.CardObjetivo}>
            < Card.Content>
            <Title>Objetivo 5</Title>
            <Paragraph>descricao</Paragraph>
            </Card.Content>
            </Card>
       
            </View>
        </View>
    )
}

export default Objetivo;

const styles = StyleSheet.create({
    Container :{
        display : "flex",
        width: 223,
        margin : 60,
        justifyContent: 'center',

    },
    tituloObjetivo: {
      
      
      textAlign : 'center',
      fontSize : 36,
      fontWeight: 'bold',
      fontStyle : 'black',
      color: '#9200D6'
    },
   
   
  });