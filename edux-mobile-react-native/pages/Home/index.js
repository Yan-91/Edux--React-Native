import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'

const Home = () => {
    return(
        <View>
            <Header/>
            <Text>oieee</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
