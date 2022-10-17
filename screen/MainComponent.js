import { useState } from "react";
import { IMAGES } from "../shared/imageArray";
import DirectoryScreen from './DirectoryScreen'
import { View, Platform } from "react-native";
import FieldInfoScreen from "./fieldInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./splashScreen";


const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'blueSky'
                },
                headerTintColor: '#fff'
            }}
            
        >
            
            <Stack.Screen
                name="Directory"
                component={DirectoryScreen}
                options={{ title: 'Field Directory' }}
            />
            <Stack.Screen
                name="FieldInfo"
                component={FieldInfoScreen}
                options={({ route }) => ({
                    title: route.params.item.name

                })}
            />

        </Stack.Navigator>
    )

}



const MAin = () => {
    // const [images, setImages] = useState(IMAGES);
    // const [selectedImageId, setSelectedImageId] = useState();

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS==='ios'? 0 :Constants.statusBarHeight,
                
                
                

            }}
        >
        <DirectoryNavigator/>


        </View>
    )

};

export default MAin;
