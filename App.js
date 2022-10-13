 import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View, Image} from 'react-native';
 import MAin from "./screen/MainComponent";


export default function App() {
  return (
     <View style={styles.container}>
      <Image  source={require ("./assets/images/Landscape.png")}  containerStyle={{hight:20, margin:100,}}/> 
      <MAin/>
     </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:" green",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    backgroundColor:'black',
    textAlign:'center',
    alignItems:"center"

  }
});
