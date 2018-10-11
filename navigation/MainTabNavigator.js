import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import TabBarIcon from '../views/components/TabBarIcon'
import ConnectScreen from '../views/screens/ConnectScreen'
import MatchingScreen from '../views/screens/MatchingScreen'
import SettingsScreen from '../views/screens/SettingsScreen'

const ConnectStack = createStackNavigator({
    Connect: ConnectScreen,
})

ConnectStack.navigationOptions = {
    tabBarLabel: 'つながる',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-search${focused ? '' : '-outline'}`
                    : 'md-search'
            }
        />
    ),
}

const MatchingStack = createStackNavigator({
    Matching: MatchingScreen,
})

MatchingStack.navigationOptions = {
    tabBarLabel: 'マッチング',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'}
        />
    ),
}

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
})

SettingsStack.navigationOptions = {
    tabBarLabel: '設定・その他',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings'}
        />
    ),
}

export default createBottomTabNavigator({
    ConnectStack,
    MatchingStack,
    SettingsStack,
})
