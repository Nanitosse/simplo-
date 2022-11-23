import { useState } from "react";
// import { IMAGES } from "../shared/imageArray";
import DirectoryScreen from './DirectoryScreen'
import { View, Platform, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import FieldInfoScreen from "./fieldInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import HomeScreen from "./HomeScreen";
import ContactScreen from "./contactScreen";
import AboutScreen from "./aboutScreen";
// import { BackgroundImage } from "react-native-elements/dist/config";
// import CustomDrawer from "../shared/CustomDrawer";
// import  Icon   from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchComments } from "../features/comments/commentsSlice";
import { fetchFields } from '../features/fields/fieldsSlice'





const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator

            screenOptions={{
                backgroundColor: 'blue-Sky'

            }}
        >
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Main',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />

                    )
                })}
            />

        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
        // screenOptions={{
        //     headerStyle: {
        //         backgroundColor: 'blue-Sky'
        //     },
        //     headerTintColor: '#fff'
        // }}

        >
            <Stack.Screen
                name="Directory"
                component={DirectoryScreen}
                options={({ navigation }) => ({
                    title: 'Field',
                    headerLeft: () => (
                        <Icon
                            name='list'
                            type="'font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />

                    )
                }


                )}

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

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                backgroundColor: 'blue-Sky'
            }}
        >
            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact-Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}

                        />
                    )



                })}
            />

        </Stack.Navigator>

    )
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                backgroundColor: 'blue-Sky'
            }}
        >
            <Stack.Screen
                name='About Us'
                component={AboutScreen}
                option={{ title: 'About' }}
            />

        </Stack.Navigator>
    )

}

const Drawer = createDrawerNavigator();

const MAin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFields());
        dispatch(fetchComments())

    }, [dispatch]);

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,

            }}

        >


            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{ backgroundColor: 'blue' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    option={{
                        title: 'Home',
                        drawerIcon: ({ color }) => {
                            return (
                                <Icon
                                    name='home'
                                    type="font-awesome"
                                    size={24}
                                    iconStyle={{ width: 24 }}
                                    color={color}
                                />
                            )
                        }





                    }}
                />

                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    option={{
                        title: " Field directory",
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type="font-awesome"
                                size={24}
                                iconStyle={{ width: 10 }}
                                color={color}
                            />

                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    option={{ title: "Contact" }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                    option={{
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type="font-awesome"
                                size={24}
                                iconStyle={{ width: 10 }}
                                color={color}
                            />

                        )


                    }}
                />
            </Drawer.Navigator>



        </View>
    );

}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: 'black',
        fontSize: 24,

    },



})

export default MAin;
