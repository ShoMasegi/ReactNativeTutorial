import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"

import TabBarIcon from '../views/components/TabBarIcon'
import ConnectScreen from '../views/screens/ConnectScreen'
import MatchingScreen from '../views/screens/MatchingScreen'
import ChatScreen from '../views/screens/ChatScreen'
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
    Chat: ChatScreen,
})

MatchingStack.navigationOptions = ({ navigation }) => {
    return {
        tabBarLabel: 'マッチング',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'}
            />
        ),
        tabBarVisible: !(navigation.state.index > 0),
    }
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
