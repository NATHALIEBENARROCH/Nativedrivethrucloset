import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Menu from './Menu';

export default function DailyInspiration() {
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); //To get the Current Seconds

var date = moment()
.utcOffset('+05:30')
.format('YYYY-MM-DD hh:mm:ss a');

const [currentDate, setCurrentDate] = useState('');
useEffect(() => {
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds

setCurrentDate(
date + '/' + month + '/' + year 
+ ' ' + hours + ':' + min + ':' + sec
);
}, []);

return (
<>
<View style={styles.container}>

<View style={styles.header}>

<View style={styles.logoutbuttonsection}>
<TouchableOpacity onPress={()=>{nextpage()}} style ={styles.Logoutbtn}>
<Text style={styles.login}>Log Out</Text>
</TouchableOpacity>
</View>

<View style={styles.intro}>
<Text style={styles.title}>Daily Inspiration</Text>
<Text style={styles.textStyle}>{currentDate}</Text>
</View>

</View>

<ScrollView style={styles.scrollsection}>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
<Text style={styles.link}>Link 2</Text>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
<Text style={styles.link}>Link 2</Text>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
<Text style={styles.link}>Link 2</Text>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
<Text style={styles.link}>Link 2</Text>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
<Text style={styles.link}>Link 2</Text>
</TouchableOpacity></View>

<View style={styles.bordercards}><Text style={styles.clothingcat}>Clothing Card</Text><TouchableOpacity onPress={()=>{alert("link")}}>
<Text style={styles.link}>Link 2</Text>
</TouchableOpacity></View>

</ScrollView>

<Menu></Menu>
</View>
</>
);
}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center',
},

header: {
flex: 0.25,
marginBottom:15,
width: 350,
},

logoutbuttonsection: {
flex: 1,
justifyContent: 'center',
alignItems: 'flex-end',
},

Logoutbtn: {
backgroundColor: 'black',
borderRadius: 50,
width: 45,
height: 45,
padding:5,
justifyContent: 'center',
alignItems: 'center',
},

login: {
color:'white',
textAlign: 'center',
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

scrollsection: {
flex: 0.75,

},
title: {
fontSize: 30,
fontWeight:'300',
},
intro: {
justifyContent: 'center',
alignItems: 'center',
},

clothingcat: {
  fontSize: 30,
  fontWeight:'300',
  },
  link: {
    fontSize: 15,
    fontWeight:'300',
    color:"black",
    textDecorationLine: 'underline',
    },
});