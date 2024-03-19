import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <View style={styles.searchContainer}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput style={styles.searchBox} placeholder='Search all PDFs'/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        margin: 30,
        marginTop: 50,
        padding: 7,
        borderWidth: 1,
        borderColor: '#EFEAED',
        backgroundColor: '#F8F8F8',
        borderRadius: 10
    },
    searchBox: {
        marginRight: 30,
        overflow: 'hidden'
    }
});