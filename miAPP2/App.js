/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludos2 } from './components/Saludos2';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      <Text>--------------------------------------------------</Text>
      
      <Perfil nombre="carlos" materia={"Movil"}/>

      <Perfil nombre="Leo" cuatri="Cuarto"/>

      <Perfil nombre="Aaron" carrera="ITIID"/>

     
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
