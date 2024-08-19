import { Platform, StyleSheet } from "react-native";
import Constants from 'expo-constants';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 12
    },
    textInput:{
        marginBottom: 10,
        marginRight: '5%', 
        marginLeft: '5%',
    },
    header: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center"
    },
    card:{
        margin: 10
    },
    segmentedButtons:{
        marginBottom: 10,
        marginRight: '5%', 
        marginLeft: '5%'
    },
    modal:{
        borderWidth: 5, 
    },
    button:{
        padding: 10,
        marginRight: '5%', 
        marginLeft: '5%',
        border: '2px',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
    },
    calendardate:{
        marginRight: '5%', 
        marginLeft: '5%',
        fontSize: 10,
        textAlign:"center",
        fontSize: 18,
        
    },
    settings:{
        alignItems: "center",
        borderWidth: 4,
        borderColor: 'black',
        marginLeft: '5%',
        marginRight: '5%',
        padding: 10,
        flex: 0.5,
    },
    text:{
        fontSize: 30,
        border: '2px',
    },
    radiobuttons:{
     flexDirection: "row",
     justifyContent: "center",
     margin: 10,
     justifyContent: "center",
     alignItems: "center",
     fontSize: 15,
    },
    radiobuttonscontainer:{
        marginTop: 20,
        padding: 10,
        width: '100%',
        borderWidth: 4,
        borderColor: 'orange',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    radiobuttonstext:{
        fontSize: 20,
    },
    
});

export{Styles};