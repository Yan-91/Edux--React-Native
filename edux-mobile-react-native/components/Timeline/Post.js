import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Typo from '../Typo';
import Heart from '../../assets/heart.svg'
const Post = (post) => {

    const {texto, urlImagem} = post 
    useEffect (() => {
        console.log('post' + JSON.stringify(post))
    },[])
    return(

        <View style={styles.post}>
             <Image source={{uri: urlImagem}} style={styles.postImage}/>
             <View style={{marginVertical:20}}>
                 <Typo text={texto} type="regular" size="20px"/>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    post:{
        padding:20,
        width:'300px',
        minHeight:'400px',
        marginVertical:5,
        marginHorizontal:10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00C2EE'
    },
    postImage:{
        width:'100%',
        height:'200px',
        borderRadius: 5,
    }
})

export default Post;