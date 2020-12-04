import React,{useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import Typo from '../../components/Typo';
import Header from '../../components/Header';
import CreatePost from "../../components/Timeline/CreatePost";
import Posts from '../../components/Timeline/Posts';

function Timeline() {
    let boldTittle = (text)=>(
        <Typo type="bold" text={text} color="#9100d5" size="24px"/>
    )
    let boldText = (text)=> (
        <Typo type="bold" text={text} color="#9100d5" size="16px"/>
    )
    let normalText = (text)=> (
        <Typo type="regular" text={text} color="#9100d5" size="16px"/>
    )

        
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.centerText}>   
                {boldTittle("POSTAGENS")}                 
            </View>            
            <CreatePost />
            <Posts />

            
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
    }
  });
export default Timeline;