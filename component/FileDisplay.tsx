import { StyleSheet, Text, View } from 'react-native';

export default function FileDisplay () {
    return (
        <View style={style.overallContainer}>
            <View style={style.logoContainer}></View>
            <View>
                <Text style={style.nameText}>fist pdf</Text>
                <Text style={style.dateText}> 04/04/2025 </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    overallContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        gap: 30,
        marginHorizontal: 20,
        padding: 10,
        borderRadius:10,
        backgroundColor: '#F8F8F8'
    },
    logoContainer:{
        width:40,
        height: 40,
        backgroundColor: 'red'
    },
    fileDetailsContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameText: {
        fontSize:15,
        fontWeight: '500'
    },
    dateText: {
        fontSize:12,
        fontWeight: '400'
    }
})