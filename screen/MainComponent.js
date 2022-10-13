import { useState } from "react";
import { IMAGES } from "../shared/imageArray";
import DirectoryScreen from './DirectoryScreen'
import { View } from "react-native";
import FieldInfoScreen from "./fieldInfoScreen";



const MAin = () => {
    const [images, setImages] = useState(IMAGES);
    const [selectedImageId, setSelectedImageId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                images={images}
                onPress={(imageId)=>setSelectedImageId(imageId)}

            />
            <FieldInfoScreen
                item={
                    images.filter((image) => image.id === selectedImageId)[0]
                }
            />


        </View>
    )

};

export default MAin;
