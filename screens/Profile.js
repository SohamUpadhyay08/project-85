import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Profile extends React.Component{
render(){
  return(
    <View style = {{flex :1 , justifyContent : "center" , alignItems : "center"}}>
    <Text>
    Profile
    </Text>
    </View>
  )
}
}