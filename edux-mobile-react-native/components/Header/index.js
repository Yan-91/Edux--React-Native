import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Header, Image } from 'react-native-elements';
import logo2 from '../../assets/ImagemEdux.png'

const Headers = () => {
    return (
        <View>
            <Header
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',}}
                // leftComponent={ <Image source={{ logo }} style={{ width: 155, height: 50 }}/>  }
                // rightComponent={ <Button style={{ icon: 'home', color: '#fff' }}/>}
            >
            </Header>
        </View>
    )
}

export default Headers;
 