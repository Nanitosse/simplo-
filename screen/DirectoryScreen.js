import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
// import SplashScreen from "./splashScreen";
import { useState } from "react";
import { fields } from '../shared/fieldsArray';
// import { ImageBackground } from "react-native";



const DirectoryScreen = ({ navigation }) => {
    const [images, setImages] = useState(IMAGES)
    renderDirectoryItem = ({ item }) => {
        return (
            
                <ListItem
                    onPress={() => navigation.navigate("FieldInfo", { item })}

                >
                    <Avatar source={item.image} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            


        )
    }
    return (
        <FlatList
            data={images}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}


        />

    )

}
export default DirectoryScreen;