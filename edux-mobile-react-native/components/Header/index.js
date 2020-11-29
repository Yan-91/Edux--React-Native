import React from 'react';
import { Image,View } from 'react-native';
import Logo from '../../assets/EduX.svg'
import Logout from '../../assets/logout.svg'
import Typo from '../Typo';
const Header = () => {
    return (
        <View style={{position:'fixed',backgroundColor:'#9100d5',width:'100%',padding:10,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Typo text="EduX" type="black" size="36px" color="#fff"/>
            <View>
                <Image source={Logout} style={{width:'27px',height:'21px'}}/>
            </View>
        </View>
    )
}

export default Header;
