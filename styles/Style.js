import { Platform, StyleSheet } from "react-native";
import Constants from 'expo-constants';



const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight + 5 : 0

    },
});

export{Styles};