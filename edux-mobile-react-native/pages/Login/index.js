import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Logo from './../../assets/ImagemEdux.png'

// Async Storage = semelhante ao localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';
import { TitilliumWeb_600SemiBold } from '@expo-google-fonts/titillium-web';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    //Salva o token

    const salvar = async (value) => {
        try {
            await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
            // saving error
        }
    }

    const Logar = () => {

        const corpo = {
            Email: email,
            Senha: senha
        }
        

        fetch('http://192.168.15.37:5000/api/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Autorization': 'Bearer' + '@jwt'
            },
            body: JSON.stringify(corpo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status != 404) {
                    alert('Seja bem vindo-a');
                    console.log(data.token);

                    salvar(data.token);
                    navigation.navigate('Autenticado');
                } else {
                    alert('Dados inválidos!');
                }
            })

    }

    return (


        <View style={styles.container}>

            <Image style={styles.image} source={Logo} />

            <Text style={styles.loginText}>LOGIN</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="E-mail"
                placeholderTextColor="#9200D6"
            />

            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="Senha"
                placeholderTextColor="#9200D6"
                
                placeholderStyle={styles.placeholder}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={Logar}
            >
                <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9200D6'
    },
    placeholder: {
        
        
    },
    input: {
        width: '62%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 30,
        padding: 5,
        borderRadius: 6,
        backgroundColor: 'white',
        fontFamily: 'TitilliumWeb',
        fontWeight: 'bold',
        paddingLeft:20
        
    },
    button: {
        backgroundColor: 'white',
        width: '62%',
        padding: 5,
        borderRadius: 6,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textButton: {
        color: '#9200D6',
        fontWeight: 'bold'
    },
    loginText: {
        fontFamily: 'TitilliumWeb-Regular',
        color:"white",
        fontWeight: 700,
        fontSize:24,
        marginTop:50,
        marginBottom: 20

    },
    image: {
        width:
            219,
        height:
            71,
        bottom:
            -20,


    }
});

export default Login;