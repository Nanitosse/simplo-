import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import MAin from "./screen/MainComponent";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from './screen/splashScreen';


export default function App() {
  return (

    <ImageBackground
      source={require('./assets/images/soccer.png')}
      style={{
        flex:1,
        // resizeMode:'cover',
        justifyContent:'center',
        
      }}

    >
      <NavigationContainer theme={MyTheme}>
        <MAin />
      </NavigationContainer>
    </ImageBackground>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " green",
    alignItems: 'center',
    justifyContent: 'center',



  },
  text: {
    backgroundColor: 'black',
    textAlign: 'center',
    alignItems: "center"

  },


});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
};
