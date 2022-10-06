 import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View, Image} from 'react-native';
// import MAin from "./screen/MainComponent";
// import image from './assets/images/Landscape'

export default function App() {
  return (
     <View style={styles.container}>
      <Image  source={require ("./assets/images/Landscape.png")}/>
      <StatusBar style="auto" />
     </View>
    // <MAin/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
