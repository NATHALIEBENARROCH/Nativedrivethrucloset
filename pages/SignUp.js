import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default function SignUp({setPage}) {

// test get call
// let test=async() => {
//   let response = await fetch("http://192.168.2.33:4000", {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     }
//   }
//   )
//   let body = await response.text();
//   alert(body)

//   }
// test post call
  // let testpost=async() => {
  //   let response = await fetch('http://192.168.2.33:4000/post/', {
  //     method: 'post',
  //     mode: 'no-cors',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
       
  //     },
  //     body: JSON.stringify(
  //     {test:'testing123'}
  //     )
  //   }
  //   );
 
  //   let body = await response.text();
  //   alert(body)
  
  //   }

return (
<>
<View style={styles.container}>

<Image
style={styles.tinyLogo}
source={require('../assets/LOGOGV.png')}
/>
<Text style={styles.slogan}>Page Sign Up</Text>
<View>
<TouchableOpacity onPress={()=>{setPage("dailyInspiration")}} style ={styles.TouchableOpacity}>
<Text style={styles.login}>Sign up</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setPage("loginLogin")}} style={styles.TouchableOpacity2}>
<Text style={styles.signup}>Log In</Text>
</TouchableOpacity>


</View>

</View>



</>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  slogan: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:150,
    backgroundColor: 'black',
    padding:10,
    width:200,
    color: 'white',
    borderRadius:15,
    },
    login: {
      color: 'white',
    },
    TouchableOpacity2: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20,
      width:200,
      color: 'white',
      borderRadius:15,
      },
    signup: {
      color: 'black',
      textDecorationLine: 'underline',
    },
});