import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'
import fotoPerfil from '../../assets/fotoPerfil.jpg'

const Home = ( {navigation} ) => {
    return(
                <View>
                    <Header navigation={navigation}/>
                    <Text style={styles.tituloRank}> RANKING GERAL </Text>
                    <View style={styles.dadosRank}>
                        <TouchableOpacity onPress={() => navigation.navigate('Indisponivel')}>
                            <Image style={styles.foto} source={fotoPerfil}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.nomeAluno}>Nome Aluno</Text>
                            <Text style={styles.textoComum}>Curso Aluno</Text>
                        </View>
                    </View>
                    <View style={styles.shape1}>
                        <Text style={styles.textoTitulo}> Forma 1</Text>
                        <Text style={styles.textoDados}>10</Text>
                        <Text style={styles.textoComum}>Objetivos</Text>
                    </View>
                        <View style={{flexDirection:'row'}}>
                                <View style={styles.shape2}>
                                    <Text style={styles.textoTitulo}>Forma 2</Text>
                                    <Text style={styles.textoDados}>10</Text>
                                    <Text style={styles.textoComum}></Text>
                                </View>
                                <View style={styles.shape3}>
                                    <Text style={styles.textoTitulo}>Forma 3</Text>
                                    <Text style={styles.textoDados}>10</Text>
                                    <Text style={styles.textoComum}></Text>
                                </View>
                        </View>
                    <View style={styles.shape4}>
                        <Text style={styles.textoTitulo}>Forma 4</Text>
                        <Text style={styles.textoDados}>10</Text>
                        <Text style={styles.textoComum}></Text>
                    </View>
                </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    tituloRank: {
      position : 'relative',
      top : 150,
      botton : '0%',
      textAlign : 'center',
      fontSize : 26,
      fontWeight: 'bold',
      fontStyle : 'black',
      color: '#9200D6'
    },
    shape1: {
        position : 'relative',
        top : 250,
        width: 120,
        height: 120,
        borderRadius: 60,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 10,
        backgroundColor: '#00D65F',
    },
    shape2: {
        position : 'relative',
        top : 200,
        width: 120,
        height: 120,
        borderRadius: 60,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 10,
        backgroundColor: '#00C2EE',
    },
    shape3: {
        position : 'relative',
        top : 200,
        width: 120,
        height: 120,
        borderRadius: 60,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 10,
        backgroundColor: '#F9E800',
    },
    shape4: {
        position : 'relative',
        top : 150,
        width: 120,
        height: 120,
        borderRadius: 60,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 10,
        backgroundColor: '#FF271C',
    },
    foto: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    dadosRank: {
        flexDirection:'row',
        position : 'relative',
        top : 200,
        width: 350,
        height: 50,
        borderRadius: 25,
        margin : 'auto',
        backgroundColor: '#9200D6',
    },
    nomeAluno: {
        padding : 5,
        fontWeight: 'bold',
        fontStyle : 'black',
        color: '#FFF',
    },
    textoTitulo: {
        color: '#FFF',
        fontSize : 20,
        fontWeight: 'bold',
        fontStyle : 'black',
    },
    textoComum: {
        margin: 'auto',
        color: '#FFF',
    },
    textoDados: {
        margin: 'auto',
        color: '#FFF',
        fontSize : 15,
        fontWeight: 'bold',
        fontStyle : 'black',
    }
  });