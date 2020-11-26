import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Header from '../../components/Header'

const Home = () => {
    return(
        <View>
            {/* <Header/> */}
            <Text>oi</Text>
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
    text: {
        position: 'absolute',
        left: -0.59,
        right: -0.59,
        top: 0,
        bottom: 0,

        fontfamily: 'Titillium Web',
        fontstyle: 'normal',
        fontweight: 'bold',
        fontsize: 24,
        lineheight: 37,
        /* identical to box height */

        display: 'flex',
        alignitems: 'center',
        textalign: 'center',

        color: '#9200D6'
    }
  });
