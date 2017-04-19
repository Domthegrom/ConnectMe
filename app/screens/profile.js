import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Switch,
  ListView,
  TextInput,
  Button,
} from 'react-native'

import *  as firebase from 'firebase'

import Slider from 'react-native-multislider'
import CircleImage from '../components/circleImage'
import ProfileList from '../components/profileList' 
import ProfileHeader from '../components/profileHeader'

export default class Profile extends Component {

static navigationOptions = {
    title: 'Me!',
  }

  state = {
    ageRangeValues: [18, 24],
    distanceValue: [5],
  }

  updateUser = (key, value) => {
    const {uid} = this.props.user
    firebase.database().ref('users').child(uid)
      .update({[key]:value})
  }

  render() {
    const {first_name, work, id} = this.props.user
    const {ageRangeValues, distanceValue, showMen, showWomen} = this.state
    const bio = (work && work[0] && work[0].position) ? work[0].position.name : null
    return (
      <View style={styles.container}>
        <ProfileHeader />
        <View style={styles.profile}>
          <CircleImage facebookID={id} size={120} />
          <Text style={{fontSize:20}}>{first_name}</Text>
          <Text style={{fontSize:15, color:'darkgrey'}}>{bio}</Text>
        </View>
        <View style={styles.label}>
          <Text>Distance</Text>
          <Text style={{color:'darkgrey'}}>{distanceValue}mi</Text>
        </View>
        <Slider
          min={1}
          max={100}
          values={distanceValue}
          onValuesChange={val => this.setState({distanceValue:val})}
          onValuesChangeFinish={val => this.updateUser('distance', val[0])}
        />
        <ProfileList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
  },
  profile: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  label: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
  },
})