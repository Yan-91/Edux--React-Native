import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { useFonts } from 'expo-font';



const ItemObjetivo = (objetivo) => {
    let [fontsLoaded] = useFonts({
        'TitilliumWeb_900Black': require('../../assets/fonts/TitilliumWeb_900Black.ttf'),
        'TitilliumWeb_400Regular': require('../../assets/fonts/TitilliumWeb_400Regular.ttf'),
        'TitilliumWeb_700Bold': require('../../assets/fonts/TitilliumWeb_700Bold.ttf'),
    });

    const {descricao} = objetivo;

    return (
        <View style={styles.listItem}>
            <View>
                <Text style={styles.Text1}>Descrição:<br/> 
                {descricao}</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : '#F7F7F7',
        marginTop : 60
    },
    listItem : {
        margin : 10,
        padding : 10,
        backgroundColor : '#F7F7F7',
        width : '90%',
        flex : 1,
        alignSelf : 'center',
        flexDirection : 'row',
        borderRadius : 30
    },
    Text1: {
        color: 'Black',
        fontWeight: 'bold',
        fontFamily: 'TitilliumWeb_900Black',
        fontSize:14,
        paddingLeft:25,
        paddingRight:30
    },
    Text2: {
        color: 'Black',
        fontWeight: 'bold',
        fontFamily: 'TitilliumWeb_900Black',
        fontSize:14,
        
        paddingRight:40
    }
})

export default ItemObjetivo;