import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Typo from '../Typo';
import Heart from '../../assets/heart.svg'
function Post(props) {
    return(
        <View style={styles.post}>
            <Image source={props.imagem} style={styles.postImage}/>
            <View style={{marginVertical:20}}>
                <Typo text={props.post} type="regular" size="12px"/>
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'40px'}}>
                    <Image source={Heart} style={{width:20,height:20}} />
                    <Typo text={props.curtidas} color="#00c2ee" size="16" type="bold"/>
                </View>
                <View>
                    <Typo text={props.data} color="#00c2ee" size="16" type="bold"/>
                </View>
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