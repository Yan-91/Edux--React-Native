import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import aviso from '../../assets/aviso.png'

const Indisponivel = () => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={aviso}
            />
        </View>
    )
}

export default Indisponivel;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    image: {
        width: 219,
        height: 165,
        bottom: -20,
    }
  });