import React, { Component } from 'react'
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const {height, width} = Dimensions.get('window');

export default ProfileHeader = ({iconName}) => {
  return (
    <View style={styles.container}>
        <Ionicons name={'ios-settings'} size={30} color={'gray'} />  
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
    justifyContent:'flex-end',
    paddingRight: 15
  }
})