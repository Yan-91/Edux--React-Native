import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Logo from './../../assets/ImagemEdux.png'
import { useFonts } from 'expo-font';

// Async Storage = semelhante ao localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'TitilliumWeb_900Black': require('../../assets/fonts/TitilliumWeb_900Black.ttf'),
        'TitilliumWeb_400Regular': require('../../assets/fonts/TitilliumWeb_400Regular.ttf'),
        'TitilliumWeb_700Bold': require('../../assets/fonts/TitilliumWeb_700Bold.ttf'),
    });

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
        

        fetch(' http://192.168.7.161:5000/api/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                    navigation.push('Autenticado');
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
    input: {
        width: '62%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 30,
        padding: 5,
        borderRadius: 6,
        backgroundColor: 'white',
        fontFamily: 'TitilliumWeb_400Regular', fontSize: 40,
        paddingLeft:20,
        fontSize:14,
        color: '#9200D6',
    },
    button: {
        backgroundColor: 'white',
        width: '62%',
        padding: 5,
        borderRadius: 6,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textButton: {
        color: '#9200D6',
        fontWeight: 'bold',
        fontFamily: 'TitilliumWeb_900Black',
        fontSize:14
    },
    loginText: {
        fontFamily: "TitilliumWeb_700Bold",
        color:"white",
        fontSize:24,
        marginTop:40,
        marginBottom: 10

    },
    image: {
        width:
            210,
        height:
            66,
        bottom:
            -25,


    }
});

export default Login;