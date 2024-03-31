import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Styles } from './styles/Style';

export default function App() {
  return (
    <View style={Styles}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
