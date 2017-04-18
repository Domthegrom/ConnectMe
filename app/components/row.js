import React, {Component} from 'react'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native'


export default class Row extends Component {

  render() {
    return (
        <View style={styles.container}>
                <TextInput
                 style={styles.input}
                 placeholder= 'Interests'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 autoCorrect={true} 
                />
                 <TextInput
                 style={styles.input}
                 placeholder='Bio'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 autoCorrect={true} 
                />
                <TextInput
                 style={styles.input}
                 placeholder= 'My Industry'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                 autoCorrect={true} 
                />
                <TextInput
                 style={styles.input}
                 placeholder= 'Education'
                 placeholderTextColor='rgba(255,255,255,0.9)'
                />
         </View>
    )
  }
}


const styles = StyleSheet.create ({
   container: {
       padding: 20,
   },
   input: {
       height: 40,
       backgroundColor: '#34B3E4',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
   },
   buttonContainer: {
       backgroundColor: '#34B3E4',
       paddingVertical: 12,
   },
   buttonText: {
       color: 'white',
       textAlign: 'center',
       fontWeight: '700',
   },
});