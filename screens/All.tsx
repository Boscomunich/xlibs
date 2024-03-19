import SearchBar from "../component/SearchBar";
import { StyleSheet, Text, View } from 'react-native';
import FileDisplay from "../component/FileDisplay";
import { useSelector, useDispatch } from 'react-redux'
import { updateDocument } from '../state/Slice'
import RNFS from 'react-native-fs';
import { useEffect } from "react";
import { FileState } from '../types'

  export default function All () {
    const { document } = useSelector((state: FileState) => state.file)
    const allowedExtensions = ['.pdf', '.ppt', '.xls', '.xlsx', '.pptx', '.csv'];
    const dispatch = useDispatch()

    useEffect(() => {
      // Get the path to the external storage directory
      const path = RNFS.ExternalStorageDirectoryPath;
      // Read the directory
      const getFiles = async ()  => {
        const files = await RNFS.readDir(path)
        const documentFiles = await files.filter((file) =>
        allowedExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
      );
      dispatch(documentFiles)
      }
      getFiles()
    })
  return (
    <View>
      <Text>{document}</Text>
    </View>
  )

  }
