import React, {Component} from 'react'
import {
  ListView,
  Text,
  View,
} from 'react-native'


export default class ProfileList extends Component {

  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow !== newRow })
  }

renderRow = () => {
    return (
        <Text>Hello</Text>
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
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    )
  }
}