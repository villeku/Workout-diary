import * as React from 'react';
import { Modal, Pressable, View } from "react-native"; 
import { Checkbox, SegmentedButtons, Text, TextInput, IconButton, MD3Colors, Button, MD3LightTheme as DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { Styles } from "../styles/Style";
import { useContext, useState } from "react";
import { WorkoutContext, DistancetypeContext } from "./Contexts";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [sport, setSport] = useState('walk');

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();

    const sportButtons = [
        {value: 'walk', label: 'Walk', icon: 'walk'},
        {value: 'run', label: 'Run', icon: 'run'},
        {value: 'ski', label: 'Ski', icon: 'ski'}
    ]

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primaryContainer: 'orange',
          secondaryContainer: 'orange',
          primary: 'orange',
          secondary: 'orange',
        },
      };

    const {workout, setWorkout} = useContext(WorkoutContext);

    function addWorkout(){
        const t = new Date();
        const stime = t.getDate() + '.' + (t.getMonth()+1) + 
            '.' + t.getFullYear() + ' ' + t.getHours() + ':' + t.getMinutes();

        const modifiedWorkout = [...workout, {distance, duration, sport, stime, date} ];
        
        if (distance < 0) {
            alert('Distance is negative')
         } else if (duration < 0) {
            alert('Duration is negative')
         } else {
            setWorkout(modifiedWorkout);
        setDistance('');
        setDuration('');
        setDate('');
         }
    }

    function dateSelected(day){
        setVisible(false);
        setDate(day);
    }
    
    function Opencalendar(){
        return(
        <View>
            <Modal style={Styles.modal} visible={visible} transparent={true}>
                <Calendar style={Styles.calendar} onDayPress={dateSelected}/>
            </Modal>
            <Button mode="contained" labelStyle={{ fontSize: 20 }} style={Styles.button} onPress={() => setVisible(true)} >Select date</Button>
            <Text style={Styles.calendardate}>{date ? 'Selected date: ' + date.dateString : 'No date selected'}</Text>
        </View>
        )
    }

    return(
        <PaperProvider theme={theme}>
            <SafeAreaView style={Styles.container}>

                <Text style={Styles.header} variant="headlineMedium">Add Workout</Text>
                <SegmentedButtons
                    buttons={sportButtons}
                    value={sport}
                    onValueChange={setSport}
                    style={Styles.segmentedButtons}
                    theme={{ colors: { primary: 'green' } }}
                />
                <TextInput
                    mode="outlined"
                    style={Styles.textInput}
                    label={'Distance'}
                    value={distance}
                    onChangeText={setDistance}
                />
                <TextInput
                    multiline
                    mode="outlined"
                    style={Styles.textInput}
                    label={'Duration'}
                    value={duration}
                    onChangeText={setDuration}
                />
                <Opencalendar />
                <Button mode="contained" labelStyle={{ fontSize: 20 }}  style={Styles.button} onPress={addWorkout} >Save workout</Button>

            </SafeAreaView>
        </PaperProvider>
    );
}
