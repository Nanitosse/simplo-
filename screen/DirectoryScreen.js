import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";


const DirectoryScreen = (props) => {
    renderDirectoryItem=({item})=>{
        return(
            <ListItem>
                <Avatar source={item.image}  />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }
    return(
        <FlatList
        data={props.images}
        renderItem={renderDirectoryItem}
        keyExtractor={(item)=>item.id.toString()}


    />

    )

}
export default DirectoryScreen;