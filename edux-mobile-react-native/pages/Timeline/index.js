import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Typo from '../../components/Typo';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event, set } from 'react-native-reanimated';
import Post from '../../components/Timeline/Post';
import { Button } from 'react-native';

function Timeline( {navigation} ) {
    let boldTittle = (text)=>(
        <Typo type="bold" text={text} color="#9100d5" size="24px"/>
    )
    let boldText = (text)=> (
        <Typo type="bold" text={text} color="#9100d5" size="16px"/>
    )
    let normalText = (text)=> (
        <Typo type="regular" text={text} color="#9100d5" size="16px"/>
    )

    const [texto , setTexto] = useState([]); 
    const [urlImagem, setUrlImagem] = useState([]);
    const [token, setToken] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('@jwt')
            .then(data => {
                setToken(data)
            })
        listarPost();
    }, []);

    const listarPost = () => {
        fetch('http://192.168.7.161:5000/api/Dica', {
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'Bearer ' + token
              }
        })

        .then(response => response.json())

        .then(dados => {
            setTexto(dados)
            setUrlImagem(dados)
            console.log(data);
        })
        .catch(err => console.error(err));
    }

    const renderPost = ({item}) => {
        console.log(item) 
        return (
            <Post 
                texto = {item.texto}
                urlImagem = {item.urlImagem}
            />
        )
    }

    return(
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.centerText}>   
                {boldTittle("POSTAGENS")}    
            <TextInput style={styles.box} placeholder="Qual sua dica pra hoje?" onChange={event => setTexto(event.target.value)} /> 
            <View style={{ display: 'flex',flexDirection:'row',marginTop:10, margin: 'auto'}}>                                
                <Button
                    onPress={renderPost}
                    title="Adicionar imagem"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />  
                <Button
                    onPress={renderPost}
                    title="Criar dica"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            </View>            
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
    centerText:{
        marginTop:100,
        textAlign:'center'
    },
    box: {
        padding: 10,
        width: '400px',
        height: '100px',
        marginTop: 40,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#9100d5'    
    },
  });
export default Timeline;