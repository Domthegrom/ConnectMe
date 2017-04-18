import React, {Component} from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class LinkedinButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.props.onPress}>
        <View style={styles.buttonContainer}>
          <Icon name={'linkedin'} size={20} color={'white'} />
          <Text style={styles.buttonText}>Login with Linkedin</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height:40,
    width:220,
    backgroundColor:'#007bb6',
    borderRadius: 50,
    marginTop: 25,
  },
  buttonContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color:'white',
    fontSize:15,
    marginLeft:15,
  },
})