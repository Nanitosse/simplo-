import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
// import  {COMMENT} from '../shared/comment';
// import { PARTNERS } from "../shared/partner";
// import { IMAGES } from "../shared/imageArray";
import { Card } from "react-native-elements";
import  {useSelector} from 'react-redux'
const FeatureItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{uri:baseUrl+item.image}}>
                    <View style={{ justifyContent: 'center', flex: 1, }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center ',
                                fontSize: 20,
                            }}
                        >
                            {item.name}

                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}> {item.description}</Text>
            </Card>

        );
    }
    return <View />;
};



const HomeScreen = () => {
    // const [items, setItems] = useState(IMAGES)
    // const [partners, setPartners] = useState(PARTNERS);
     

    const fields = useSelector((state)=> state.fields);
    const comments= useSelector((state)=>state.comments);
    const featPartners = partners.find((partner) => partner.featured);
    const featItems = items.fieldsArray.find((item) => item.featured);

    return (
        <ScrollView>
            <FeatureItem item={featItems} />
            <FeatureItem item={featPartners} />
        </ScrollView>
    )

}

export default HomeScreen;