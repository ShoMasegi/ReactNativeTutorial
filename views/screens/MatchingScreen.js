import React from 'react'
import {
    TouchableOpacity,
    View,
    Button,
    Platform,
    StyleSheet,
    Text,
    FlatList
} from 'react-native'

const _rows = [
    {id: 0, text: 'View'},
    {id: 1, text: 'Text'},
    {id: 2, text: 'Image'},
    {id: 3, text: 'ScrollView'},
    {id: 4, text: 'ListView'},
]

const _extractKey = ({id}) => id

export default class SettingsScreen extends React.Component {

    static navigationOptions = {
        title: 'マッチング',
        headerStyle: {
            backgroundColor: '#1BABC1'
        },
        headerTintColor: '#fff'
    }

    _onPressItem = () => {
        this.props.navigation.navigate('Chat')
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={this._onPressItem}>
                <Text style={styles.row}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={_rows}
                    renderItem={this._renderItem}
                    keyExtractor={_extractKey}
                />
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
    flatList: {
        marginTop: 20,
    },
    row: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: 'skyblue',
    },
})
