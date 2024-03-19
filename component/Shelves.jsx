import { StyleSheet, Text, View } from 'react-native';

export default function Shelves () {
    return (
        <View style={style.shelveStyle}>

        </View>
    )
}

const style = StyleSheet.create({
    shelveStyle: {
        height: 100,
        width: 140,
        backgroundColor: 'red',
        marginHorizontal:25,
        marginBottom: 50,
        borderRadius: 10
    }
})