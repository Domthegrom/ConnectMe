import {StackNavigator} from 'react-navigation'
import * as firebase from 'firebase'
import Home from './screens/home'
import Login from './screens/login'


const firebaseConfig = {
  apiKey: "AIzaSyB2KIWEFF5kVLEq0N--IGH-JYR7TPosCU0",
  databaseURL: "https://clone-fb2c1.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

const RouteConfigs = {
  Login: {screen:Login},
  Home: {screen:Home},
}

const StackNavigatorConfig = {
  headerMode:'none',
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)