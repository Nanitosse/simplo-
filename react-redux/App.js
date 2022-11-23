import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import MAin from "../screen/MainComponent";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import SplashScreen from './screen/splashScreen';
import { Provider } from 'react-redux';
import { store } from '../redux/store';


export default function App() {
  return (

    <Provider   store={store}>
      <ImageBackground
        source={require('../assets/images/soccer.png')}
        style={{
          flex: 1,
          justifyContent: 'center',

        }}

      >
        <NavigationContainer theme={MyTheme}>
          <MAin />
        </NavigationContainer>
      </ImageBackground>
    </Provider>



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

