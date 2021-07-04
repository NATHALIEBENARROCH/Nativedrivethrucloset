import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Logoutbutton from './Logoutbutton';

export default function StartSelecting({setPage}) {
return (
<>

<View style={styles.container}>
<Logoutbutton setPage={setPage}/>
{/* HERE WE ARE EXPORTING PROP TO THE CHILD COMPONENT  */}
<View style={styles.header}>
<View style={styles.intro}>
<Text style={styles.title}>Start Selecting</Text>
</View>
</View>

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

});