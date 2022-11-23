import React from "react";
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DefaultTheme} from "@react-navigation/drawer";

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         primary: 'rgb(255, 45, 85)',
//         background: 'transparent',
//     },
// };

const CustomDrawer = (props) => {
    return (


        
            <DrawerContentScrollView  {...props} >
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>

        



    )

}

export default CustomDrawer;