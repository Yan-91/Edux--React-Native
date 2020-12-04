import React,{useEffect,useState} from 'react';
import { StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './Post';
function Posts() {
    const [Json, setJson] = useState([
        {key:1,titulo:"Titulo 1",post:"lorem ipsum dolor sit amet",curtidas:"22",data:"20/20/20",imagem:"https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {key:2,titulo:"Titulo 2",post:"lorem ipsum dolor sit amet2",curtidas:"44",data:"22/20/20",imagem:"https://images.pexels.com/photos/3131819/pexels-photo-3131819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    ]);
    useEffect(() => {
        let url = ""
        fetch(url)
            .then((res)=> {return res.json()})
            .then((json)=>{
                setJson(json);
            })
    }, []);
    let list = Json.map((item)=>{
        return(
            <Post key={item.key} titulo={item.titulo} post={item.post} curtidas={item.curtidas} data ={item.data} imagem = {item.imagem}/>
        )
    })
    return(
        <SafeAreaView style={{flex:1,marginVertical:20}}>

            <ScrollView>
                {list}               
            </ScrollView>
        </SafeAreaView>
    )
}


export default Posts;