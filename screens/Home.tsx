import SearchBar from "../component/SearchBar";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Shelves from "../component/Shelves";
import FileDisplay from "../component/FileDisplay";

export default function Home () {
    return (
        <View>
            <SearchBar/>
            <Text style={style.bookContainerText}>Bookshelves</Text>
            <View>
                <Shelves/>
            </View>
            <Text style={style.bookContainerText}>Recently Added</Text>
            <FileDisplay/>
        </View>
    )
}

const style = StyleSheet.create({
    bookContainerText: {
        marginHorizontal: 30,
        marginBottom: 20,
        fontSize:20,
        fontWeight: '700'
    }
})