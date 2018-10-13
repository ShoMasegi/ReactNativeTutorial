import React from 'react'
import {
    TouchableOpacity,
    View,
    Button,
    Platform,
    StyleSheet,
} from 'react-native'

export default class SettingsScreen extends React.Component {

    static navigationOptions = {
        title: 'マッチング',
        headerStyle: {
            backgroundColor: '#1BABC1'
        },
        headerTintColor: '#fff'
    }

    pushChatScreen = () => {
        this.props.navigation.navigate('Chat')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Swipe Left' onPress={this.pushChatScreen}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
})
