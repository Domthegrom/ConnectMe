import React, { Component } from 'react'
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const {height, width} = Dimensions.get('window');

export default homeHeader = ({iconName}) => {
  return (
    <View style={styles.container}>
        <Ionicons name={'ios-person'} size={30} style={{color:'gray'}} /> 
        <Ionicons name={'ios-chatbubbles'} size={30} style={{color:'gray'}} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flexDirection:'row',
    height:60,
    width:width,
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight: 15,
    paddingLeft: 15,
  }
})