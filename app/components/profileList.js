import React, {Component} from 'react'
import {
  ListView,
  Text,
  View,
} from 'react-native'

import Row from './row'

export default class ProfileList extends Component {

  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow !== newRow })
  }

  componentWillMount() {
    this.setState({dataSource:this.state.dataSource.cloneWithRows(demoProfiles)})
  }

renderRow = profile => {
    return (
        <Text>{profile.first_name}</Text>
    )
}

renderSeparator = (sectionID, rowID) => {
    return (
      <View key={rowID} style={{height:1, backgroundColor:'whitesmoke', marginLeft:100}} />
    )
  }

  render() {
    return (
      <ListView
        style={{flex:1, backgroundColor:'white'}}
        dataSource={this.state.dataSource}
        renderRow={profile => <Row profile={profile} />}
        renderSeparator={this.renderSeparator}
         
      />
    )
  }
}

const demoProfiles = [
  {
    id: '259389830744794',
    first_name: 'Candice',
    birthday: '10/18/1986',
    work: [{position:{name:'Supermodel'}}],
  },
 
]
