import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';


const DATA =[
    {
        id : 1,
        title : "ODC LUNCHING",
        description: "My first react-native app what an experience am so glad to build this kind of thing we my class mate",
    },
    {
        id : 2,
        title : "ODC LUNCHING",
        description: "My first react-native app what an experience am so glad to build this kind of thing we my class mate",
    },
    {
        id : 3,
        title : "ODC LUNCHING",
        description: "Using javascript to build mt app is totally astonishing",
    },
    {
        id : 4,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },
    {
        id : 5,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },
    {
        id : 6,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },
    {
        id : 7,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 8,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },
    {
        id : 9,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 10,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 11,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 12,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 13,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 14,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },

    {
        id : 15,
        title : "ODC LUNCHING",
        description: "This is a powerful blog we will build for Orange Digital Center",
    },



];
 
const Item = ({ title, description }) =>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>



    </View>
);




export default function DetailsScreen ({ navigation }) {

    const renderItem= ({item}) =>(
        <Item title ={item.title} description={item.description}/>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item=> item.id}  
            />
            
            
               </SafeAreaView>

   
    );

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#6A67CE',
        marginTop:10,

    },
    item:{
        backgroundColor:'#fff',
        padding:10,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:15,

    },
    title:{
        fontSize:20,
    },
    
    description:{
        fontSize:15,
    },

})
