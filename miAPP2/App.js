/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludos2 } from './components/Saludos2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo version Movil!</Text>
      <Image source={require('./assets/wave.png')}/>
      <Text>--------------------------------------------------</Text>
       <Saludo></Saludo>
       <Saludo/>
       <Text>--------------------------------------------------</Text>

      <Saludos2></Saludos2>
      <Saludos2/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
