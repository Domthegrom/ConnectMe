import React, {Component} from 'react'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'


export default class Row extends Component {

  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
                <TextInput
                 style={styles.interests}
                 placeholder= 'Interests'
                 placeholderTextColor='black'
                 autoCorrect={true} 
                />
                <View style={styles.border}>
                </View>
                 <TextInput
                 style={styles.bio}
                 placeholder='Bio'
                 placeholderTextColor='black'
                 autoCorrect={true} 
                />
                <View style={styles.border}>
                </View>
                <TextInput
                 style={styles.input}
                 placeholder= 'My Industry'
                 placeholderTextColor='black'
                 autoCorrect={true} 
                />
                <View style={styles.border}>
                </View>
                <TextInput
                 style={styles.input}
                 placeholder= 'Education'
                 placeholderTextColor='black'
                />
                <View style={styles.border}>
                </View>
                 <TextInput
                 style={styles.input}
                 placeholder= 'Work History'
                 placeholderTextColor='black'
                />
         </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create ({
   container: {
       padding: 20,
   },
   input: {
       height: 40,
       backgroundColor: 'white',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
   },
   border: {
       height:1,
       backgroundColor:'whitesmoke',
       marginBottom: 5
   },
   interests: {
       height: 70,
       backgroundColor: 'white',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
   },
   bio: {
       height: 50,
       backgroundColor: 'white',
       marginBottom: 10,
       color : '#FFF',
       paddingHorizontal: 10,
   },
   buttonContainer: {
       backgroundColor: 'white',
       paddingVertical: 12,
   },
});