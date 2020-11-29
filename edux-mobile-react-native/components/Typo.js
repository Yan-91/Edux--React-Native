import React from 'react';
import { Text, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

function Typo(props) {
  useFonts({
    'TitilliumWeb_900Black': require('../assets/fonts/TitilliumWeb_900Black.ttf'),
    'TitilliumWeb_400Regular': require('../assets/fonts/TitilliumWeb_400Regular.ttf'),
    'TitilliumWeb_700Bold': require('../assets/fonts/TitilliumWeb_700Bold.ttf'),
  });


  return (
    <>
      {props.type == "bold" &&

        <Text style={{ fontFamily: 'TitilliumWeb_700Bold',color:props.color,fontSize:props.size }}>
          {props.text}
        </Text>
      }
      {props.type == "regular" &&

        <Text style={{fontFamily:'TitilliumWeb_400Regular',color:props.color,fontSize:props.size}}>
          {props.text}
        </Text>
      }
      {props.type == "black" &&

        <Text style={{fontFamily:'TitilliumWeb_900Black',color:props.color,fontSize:props.size}}>
          {props.text}
        </Text>
      }
    </>
  )
}


export default Typo;