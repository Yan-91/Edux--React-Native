import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from './../../assets/ImagemEdux.png'

const Headers = () => {
    return (
            <View style={styles.navigation}>
              <Image
                style={styles.imageStyle}
                source={Logo}/>
            </View>
          );
}

export default Headers;
 
const styles = StyleSheet.create({
    navigation: {
        position: "absolute",
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#9200D6",
        width: '100%',
        height: 70
    },
    imageStyle: {
        width: 200,
        height: 65,
        right: 70,
         

    }
  });