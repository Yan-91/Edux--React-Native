import React from 'react';
import { Image,View,TouchableOpacity} from 'react-native';
import Sair from '../../assets/logout.svg'
import Typo from '../Typo';



const Header = ( {navigation} ) => {

    return (
        <View style={{position:'fixed',backgroundColor:'#9100d5',width:'100%',padding:10,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Typo text="EduX" type="black" size="36px" color="#fff"/>
            <View>
                <TouchableOpacity onPress={()=> navigation.push('Logout')}>
                    <Image source={Sair} style={{width:'27px',height:'21px', paddingRight:'10px'}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;


