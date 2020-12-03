import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Typo from '../../components/Typo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemTurma from '../../components/itemTurma';


const Turmas = ( {navigation} ) => {

    const [turma, setTurmas] = useState([]);
    const [token, setToken] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('@jwt')
            .then(data => {
                setToken(data)
            })
        listarTurmas();
    }, []);

    let boldTittle = (text) => (
        <Typo type="bold" text={text} color="#9100d5" size="24px" />
    )

    const listarTurmas = () => {
        fetch(' http://192.168.15.37:5000/api/Turma', {
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'Bearer ' + token
            }
        })
            .then(response => response.json())

            .then(data => {
                setTurmas(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    const renderItem = (turma) => {
        return (
            <ItemTurma 
            descricao={turma.item.descricao}
            />
            
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.centerText}>
                {boldTittle("TURMAS")}

            </View>
            <FlatList
                data={turma}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
    },
    centerText: {
        marginTop: 100,
        textAlign: 'center'
    }
});
export default Turmas;