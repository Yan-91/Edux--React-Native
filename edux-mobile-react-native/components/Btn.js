import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Typo from './Typo';

function Btn(props) {
    return (
        <View style={{ marginHorizontal: 3 }}>
            <TouchableOpacity>
                <View
                    style={{
                        padding: 5,
                        width: "145px",
                        alignItems: 'center',
                        backgroundColor:props.bg,
                        borderRadius: 5
                    }}>
                    <Typo text={props.text} color={props.fontColor} type={props.fontType} size={props.fontSize} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Btn;