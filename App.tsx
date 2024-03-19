import "react-native-gesture-handler";
import { PermissionsAndroid, Platform, ToastAndroid, } from 'react-native';
import Navigation from "./Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { store } from './state/Store'
import { Provider } from "react-redux";

export default function App() {

  useEffect(() => {
    checkStoragePermission()
    checkAndRequestPermissions()
  })

  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const checkStoragePermission = async () => {
    try {
      const readGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      const writeGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
    } catch (e) {
      console.log(e)
    }
  }

  const checkAndRequestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
          // Add other permissions here
        ]);

        if (Object.values(granted).every((result) => result === 'granted')) {
          setPermissionsGranted(true);
        } else {
          // Handle denied permissions (e.g., show an error message)
          ToastAndroid.show('xlibs needs access to your storage to start', ToastAndroid.SHORT);
        }
      } catch (error) {
        console.error('Error requesting permissions:', error);
      }
    }
  };

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
