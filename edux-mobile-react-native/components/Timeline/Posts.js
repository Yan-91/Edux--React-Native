import React from 'react';
import { StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './Post';
function Posts() {
    return(
        <SafeAreaView style={{flex:1,marginVertical:20}}>

            <ScrollView>
                <Post />                
            </ScrollView>
        </SafeAreaView>
    )
}


export default Posts;