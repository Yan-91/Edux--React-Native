import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Typo from '../../components/Typo';
import ItemAluno from '../../components/itemAluno';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Alunos = ( {navigation} ) => {

    const [usuario, setUsuario] = useState([]);
    const [token, setToken] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('@jwt')
        .then(data => {
            setToken(data)
        })
        listarAlunos();
    }, []);

    let boldTittle = (text) => (
        <Typo type="bold" text={text} color="#9100d5" size="24px" />
    )

    const listarAlunos = () => {
        fetch(' http://192.168.15.37:5000/api/Usuario', {
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'Bearer '+ token
            }
        })
            .then(response => response.json())
            
            .then(data => {
                setUsuario(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    const renderItem = (usuario) => {
        return (
            <ItemAluno
                nome={usuario.item.nome}
                email={usuario.item.email}
                />
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.centerText}>
                {boldTittle("ALUNOS")}
                
            </View>
            <FlatList
                    data={usuario}
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
export default Alunos;

