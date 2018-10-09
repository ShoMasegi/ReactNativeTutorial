import React from 'react'
import {
    TouchableOpacity,
    View,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native'

export default class ConnectScreen extends React.Component {

    static navigationOptions = {
        title: 'Connect',
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}/>
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