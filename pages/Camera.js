import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Logoutbutton from './Logoutbutton';

export default function Camera({setPage}) {
return (
<>
<View style={styles.container}>
<Logoutbutton setPage={setPage}/>

<View style={styles.header}>
<View style={styles.intro}>
<Text style={styles.title}>Camera</Text>
</View>
</View>

<Menu setPage={setPage}/>
{/* // ABOVE IS PROP OR EXPORT THAT IS PASSED TO MENU COMPONENT */}
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

});