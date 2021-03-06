import Expo from 'expo'
import firebase from 'firebase'
import React, {Component} from 'react'
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native'
import { NavigationActions } from 'react-navigation'
import FacebookButton from '../components/facebookButton'
import LinkedinButton from '../components/linkedinButton'

export default class Login extends Component {

  state = {
    showSpinner: true,
  }

  componentDidMount() {
    //firebase.auth().signOut()
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = firebase.database().ref('users')
        this.firebaseRef.child(auth.uid).on('value', snap => {
          const user = snap.val()
          if (user != null) {
            this.firebaseRef.child(auth.uid).off('value')
            this.goHome(user)
          }
        })
      } else {
        this.setState({showSpinner:false})
      }
    })
  }

  goHome(user) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home', params:{user}}),
      ],
    })
    this.props.navigation.dispatch(resetAction)
  }

  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider
    const credential = provider.credential(token)
    return firebase.auth().signInWithCredential(credential)
  }

  createUser = (uid, userData) => {
    firebase.database().ref('users').child(uid).update({...userData, uid})
  }

  login = async () => {
    this.setState({showSpinner:true})
    const APP_ID = '1881514278793978'
    const options = {
      permissions: ['public_profile', 'user_birthday', 'user_work_history', 'email'],
    }
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, options)
    if (type === 'success') {
      const fields = ['id', 'first_name', 'last_name', 'gender', 'birthday', 'work']
      const response = await fetch(`https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`)
      const userData = await response.json()
      const {uid} = await this.authenticate(token)
      this.createUser(uid, userData)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text 
          style={{fontSize: 64, color: '#34B3E4', textAlign: 'center',}}>
          ConnectMe
          <Text style={{fontSize: 64, color: '#0077B5'}}>
          </Text>
          </Text>
          <Text
           style={{fontSize: 13, opacity: 0.8, color: '#0077B5', textAlign: 'center'}}>
           Clone your favorite skills
           </Text>
        </View>
        {this.state.showSpinner ?
          <ActivityIndicator animating={this.state.showSpinner} /> :
          <FacebookButton onPress={this.login} />
        }
        <LinkedinButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'midnightblue'
  },
  logo: {
    marginBottom: 60,
  }
})