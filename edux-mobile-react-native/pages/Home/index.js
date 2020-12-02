import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'
import fotoPerfil from '../../assets/fotoPerfil.jpg'

const Home = ( {navigation} ) => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header/>
                    <Text style={styles.tituloRank}> RANKING GERAL </Text>
                    <View style={styles.dadosRank}>
                        <TouchableOpacity onPress={() => navigation.push('Indisponivel')}>
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    tituloRank: {
      position : 'relative',
      top : 150,
      botton : '0%',
      textAlign : 'center',
      fontSize : 36,
      fontWeight: 'bold',
      fontStyle : 'black',
      color: '#9200D6'
    },
    shape1: {
        position : 'relative',
        top : 250,
        width: 200,
        height: 200,
        borderRadius: 100,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 40,
        backgroundColor: '#00D65F',
    },
    shape2: {
        position : 'relative',
        top : 200,
        width: 200,
        height: 200,
        borderRadius: 100,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 40,
        backgroundColor: '#00C2EE',
    },
    shape3: {
        position : 'relative',
        top : 200,
        width: 200,
        height: 200,
        borderRadius: 100,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 40,
        backgroundColor: '#F9E800',
    },
    shape4: {
        position : 'relative',
        top : 150,
        width: 200,
        height: 200,
        borderRadius: 100,
        margin : 'auto',
        marginTop:50,
        textAlign:'center',
        padding : 40,
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
        fontSize : 26,
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
        fontSize : 20,
        fontWeight: 'bold',
        fontStyle : 'black',
    }
  });