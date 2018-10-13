import React from 'react'
import { createStackNavigator } from 'react-navigation'
import ListScreen from '../views/screens/MatchingScreen'
import ChatScreen from '../views/screens/ChatScreen'

export default createStackNavigator({
    Chat: ChatScreen
})
