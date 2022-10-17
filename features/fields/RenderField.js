import { Text, View } from "react-native";
import { Card } from "react-native-elements";


const RenderField = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0, width: 350, height: 400, }}>
                <Card.Image source={item.image}>
                    <View style={{ justifyContent: 'center', flex: 1, }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 30,
                            }}
                        >
                            {item.name}

                        </Text>
                    </View>
                </Card.Image>
                <Text
                    style={{fontSize:20, textAlign:"center", color:"darkblue"}}
                >
                    {item.description}
                </Text>
            </Card>
        )
    }
    return <View />;

};



export default RenderField;