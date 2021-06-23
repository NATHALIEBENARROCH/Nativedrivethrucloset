import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function LogIn({nextpage}) {
return (
<>
<View style={styles.container}>

<Image
style={styles.tinyLogo}
source={require('../assets/LOGOGV.png')}
/>
<Text style={styles.slogan}>Let's go for a Fashionable Spin</Text>
<View>
<TouchableOpacity onPress={()=>{nextpage()}} style ={styles.TouchableOpacity}>

<Text style={styles.login}>Login</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.TouchableOpacity2}>
<Text style={styles.signup}>Create an account</Text>
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