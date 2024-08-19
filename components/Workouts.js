import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { Styles } from "../styles/Style";
import { WorkoutContext } from "./Contexts";

export default function Workouts(){

    const {workout} = useContext(WorkoutContext);

    return(
        <View style={Styles.container}>
            <FlatList
                data={workout}
                renderItem={({item}) => <Item item={item}
                theme={{colors: {secondaryContainer: 'orange'}}}
                />}
            />
        </View>
    );
}

function Item({item}){
    return(
        <Card mode="outlined" style={Styles.card}>
            <Card.Title 
                title={item.stime}
                left={ () => <Avatar.Icon size={30} icon={item.sport} theme={{ colors: { primary: 'orange' } }}/> }
            />
            <Card.Content>
                <Text>{'Distance: ' + item.distance + ' km'}</Text>
            </Card.Content>
            <Card.Content>
                <Text>{'Duration: ' +item.duration + ' minutes'}</Text>
            </Card.Content>
            <Card.Content>
                <Text>{'Workout date: ' + item.date.day + '.' + item.date.month + '.' + item.date.year}</Text>
            </Card.Content>
        </Card>
    )
}