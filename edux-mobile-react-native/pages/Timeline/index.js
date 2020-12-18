import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Typo from '../../components/Typo';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event, set } from 'react-native-reanimated';
import Post from '../../components/Timeline/Post';
import { Button } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native-gesture-handler';

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

    const [post, setPost] = useState([])
    const [token, setToken] = useState('');
    const [texto, setTexto] = useState('')
    const [urlImagem, setUrlImagem] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('@jwt')
            .then(data => {
                setToken(data)
            })
        listarPost();
    }, []);

    const criarPost = () => {

        const criar = {
            texto : texto,
            urlImagem : urlImagem
        }

        fetch('http://192.168.7.161:5000/api/Dica', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'Bearer ' + token
            },
            body : JSON.stringify(criar)
        
        })
        .then (response => response.json())
        .then(data => {
            alert('Evento salvo')
            console.log(data);

            listarPost();
        })
        .catch(err => console.error(err))
    
    };

    const listarPost = () => {

        fetch('http://192.168.7.161:5000/api/Dica', {
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(data => {
                setPost(data.data)
                console.log(data.data);
        })
        .catch(err => console.error(err));
    }

    const renderItem = ({item}) => {
        console.log(item) 
        return (
            <Post
                texto = {item.texto}
                urlImagem = {item.urlImagem}
            />
        )
    }

    useEffect(() => {

    })

    return(
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.centerText}>   
                {boldTittle("POSTAGENS")}    
            <TextInput style={styles.box} placeholder="Qual sua dica pra hoje?"  onChangeText={text => setTexto(text)} /> 
            <View style={styles.fixToText}>                                
                <Button
                    onPress={criarPost}
                    title="Adicionar imagem"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />  
                <Button
                    onPress={criarPost}
                    title="Criar dica"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <View style={styles.fixToText}>  
                    <FlatList
                            horizontal={true}
                            data={post}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}         
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
        margin: 'auto',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#9100d5'    
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 'auto',
        marginTop: 10

      }
  });
export default Timeline;