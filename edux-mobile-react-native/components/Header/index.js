import React from 'react';
import { Image,View,TouchableOpacity, Alert } from 'react-native';
import Logo from '../../assets/EduX.svg'
import Logout from '../../assets/logout.svg'
import Typo from '../Typo';

const Header = ( {navigation} ) => {

    const Sair = () => {
        Alert.alert(
            "Isso é um adeus? :(",
            "Deseja sair de sua conta?",
            [
              {
                text: "Sim",
                onPress: () => {
                    AsyncStorage.removeItem('@jwt');
                    navigation.push('Login');
                }
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={{position:'fixed',backgroundColor:'#9100d5',width:'100%',padding:10,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Typo text="EduX" type="black" size="36px" color="#fff"/>
            <View>
                <TouchableOpacity onPress={()=> Sair}>
                    <Image source={Logout} style={{width:'27px',height:'21px', paddingRight:'10px'}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;
