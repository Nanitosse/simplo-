import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";



const RenderField = ( props ) => {
    const{item}= props;
    if (item) {
        return (
            <Card containerStyle={StyleSheet.cardContainer}>
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
                    style={{ fontSize: 20, textAlign: "center", color: "darkblue" }}
                >
                    {item.description}
                </Text>
                <Icon
                    name={ props.isfavorite?'heart':'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={()=>props.isfavorite? console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        )
    }
    return <View />;

};

styles = StyleSheet.create({

    cardContainer: {
        paddin: 0,
        margin: 0,
        marginBottom: 20,
    },
})



export default RenderField;