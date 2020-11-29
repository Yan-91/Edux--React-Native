import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from "expo-font";
import Typo from '../Typo';
import Btn from '../Btn';

function CreatePost() {
    useFonts({
        'TitilliumWeb_400Regular': require('../../assets/fonts/TitilliumWeb_400Regular.ttf'),
    });
    return (
        <>

            <TextInput style={styles.box} placeholder="Qual sua dica pra hoje?" />                    
            <View style={{ display: 'flex',flexDirection:'row',marginTop:10}}>                                
                <Btn bg="#BBBBBB" text="Escolher imagem" fontColor="#fff" fontType="regular" fontSize="16px"/>
                <Btn bg="#00D65F" text="POSTAR" fontColor="#fff" fontType="bold" fontSize="16px"/>
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    box: {
        padding: 10,
        width: '90%',
        height: '100px',
        marginTop: 40,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#9100d5'

    }
})

export default CreatePost;