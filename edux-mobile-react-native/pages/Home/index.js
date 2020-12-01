import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'

const Home = () => {
    return(
        <View>
            <Header/>
            <Text style={styles.tituloRank}> RANKING GERAL </Text>
            <Text style={styles.shapes}> Forma </Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    tituloRank: {
      position : 'relative',
      left : '-0.59%',
      right : '-0.59%',
      top : 200,
      botton : '0%',
      textAlign : 'center',
      fontSize : 36,
      fontWeight: 'bold',
      fontStyle : 'black',
      color: '#9200D6'
    },
    shapes: {
        position : 'relative',
        top : 300,
        textAlign : 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        margin : 'auto',
        padding : 40,
        color: '#FFF',
        fontSize : 36,
        fontWeight: 'bold',
        fontStyle : 'black',
        backgroundColor: '#00D65F',
    }
  });
