import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Logoutbutton from './Logoutbutton';
import App from '../App';

export default function Explore({setPage}) {
return (
<>
<View style={styles.container}>
<Logoutbutton setPage={setPage}/>

<View style={styles.header}>
<View style={styles.intro}>
<Text style={styles.title}>Explore</Text>
</View>
</View>

<ScrollView style={styles.scrollsection}>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
</TouchableOpacity></View>


</ScrollView>

<Menu setPage={setPage}/>
</View>
</>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
header: {
flex: 0.25,
marginBottom:15,
width: 350,
},

intro: {
justifyContent: 'center',
alignItems: 'center',
},

title: {
fontSize: 30,
fontWeight:'300',
},

scrollsection: {
flex: 0.75,
},

bordercards: {
borderRadius:15,
margin:15,
borderWidth: 4,
borderColor: "black",
borderStyle: "solid",
minHeight:300,
minWidth:350,
alignItems: 'center',
justifyContent: 'center',
},



});