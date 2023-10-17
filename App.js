import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import React from 'react'

//import * as firebase from "firebase";
//import { firebaseConfig } from "./config";


//if (!firebase.apps.length) {
  //firebase.initializeApp(firebaseConfig);
//} else {
 // firebase.app();
//}


export default class App extends React.Component
{
    render()
    {
        return(
            <View>
                <Login/>
            </View>
            
        )
    }
}
