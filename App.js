import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { Styles } from './styles/Style';
import { useState, createContext } from 'react';
import Home from './components/Home.js';
import Workouts from './components/Workouts.js';
import Settings from './components/Settings.js';
import { DistancetypeContext, WorkoutContext} from './components/Contexts.js'
import { Icon, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  const [workout, setWorkout] = useState([]);
  const [distancetype, setDistancetype] = useState(false);

  

  return (
    
    <PaperProvider theme={MD3LightTheme}>

      <DistancetypeContext.Provider value={{ distancetype, setDistancetype }}>
        <WorkoutContext.Provider value={{ workout, setWorkout }}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </WorkoutContext.Provider>
      </DistancetypeContext.Provider>

    </PaperProvider>
  );
}

const Tab = createMaterialTopTabNavigator()

function Navigation(){
  return(
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Styles.container}>
        <Tab.Screen name='home' options={{title: 'Home', tabBarIcon: () => <Icon source='home' size={24} color={"#F28705"} />}} component={Home} />
        <Tab.Screen name='workouts' options={{title: 'Workouts', tabBarIcon: () => <Icon source='run-fast' size={24} color={"#F28705"} />}} component={Workouts}/>
        <Tab.Screen name='settings' options={{title: 'Settings', tabBarIcon: () => <Icon source='cog' size={24} color={"#F28705"} />}} component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
