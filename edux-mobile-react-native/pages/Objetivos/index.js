import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'


import { Card, Title, Paragraph } from 'react-native-paper';


const Objetivo = () => {

    return(
        <View>
            <Header/>
            <View style={styles.Container}>
            <Text style={styles.tituloObjetivo}> OBJETIVOS</Text>
            <Card style={styles.CardObjetivo}>
            < Card.Content>
            <Title>Objetivo 1</Title>
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
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
        width: 225,
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


