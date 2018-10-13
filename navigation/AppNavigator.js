import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import MatchingNavigator from './MatchingNavigator'

export default createSwitchNavigator({
    Main: MainTabNavigator,
})
