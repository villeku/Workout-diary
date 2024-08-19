import * as React from 'react';
import { Text, Provider as PaperProvider, MD3LightTheme as DefaultTheme, RadioButton, } from "react-native-paper";
import { Styles } from "../styles/Style";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings(){

    const [value, setValue] = React.useState('first');

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

    return(
        <PaperProvider theme={theme}>
            <SafeAreaView style={Styles.container}>
                <View style={Styles.settings} >
                    <Text style={Styles.text}>Settings</Text>
                    <View style={Styles.radiobuttonscontainer} >
                    <Text style={Styles.text}>Units</Text>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={Styles.radiobuttons}>
                                <Text style={Styles.radiobuttonstext}>Kilometers</Text>
                                <RadioButton value="first" />
                            </View>
                            <View style={Styles.radiobuttons}>
                                <Text style={Styles.radiobuttonstext}>Miles</Text>
                                <RadioButton value="second" />
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>
            </SafeAreaView>
        </PaperProvider>
    )
}
