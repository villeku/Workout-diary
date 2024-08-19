import { Text } from "react-native";

export default function Fonts() {

    const [loaded] = useFonts({
      Indieflower: require('./fonts/IndieFlower-Regular.ttf')
    });
  
    if(!loaded){
      return (<Text>Loading...</Text>)
    }
}