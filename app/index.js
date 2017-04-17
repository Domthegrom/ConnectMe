import {StackNavigator} from 'react-navigation'
import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'
import Chat from './screens/chat'

const firebaseConfig = {
  apiKey: "AIzaSyB2KIWEFF5kVLEq0N--IGH-JYR7TPosCU0",
  databaseURL: "https://clone-fb2c1.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

const RouteConfigs = {
  Login: {screen:Login},
  Home: {screen:Home},
  Chat: {
    screen:Chat,
      navigationOptions: {
        title: 'Chat!',
      }
  },
}

const StackNavigatorConfig = {
  headerMode:'none',
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)