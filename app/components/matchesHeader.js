import React, { Component } from 'react'
import {View, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const {height, width} = Dimensions.get('window');

export default matchesHeader = ({iconName}) => {
  return (
    <View style={styles.container}>
        <Text style={{color: '#34B3E4', fontSize: 25, }}>ConnectMe</Text>
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
    justifyContent:'center',
    paddingRight: 15,
  }
})