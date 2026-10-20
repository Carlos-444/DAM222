/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludos2 } from './components/Saludos2';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      

      
      <Perfil style={styles.tarjeta1} nombre="carlos" materia="ED" cuatri="4" carrera="ITIID"/>

      <Perfil style={styles.tarjeta2} nombre="Leo" materia="Movil" cuatri="4" carrera="ITIID"/>

      <Perfil style={styles.tarjeta3} nombre="Aaron" materia="Web" cuatri="4"  carrera="ITIID"/>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
justifyContent: 'space-evenly',
alignItems: 'center',
          },


  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  tarjeta1:{
    backgroundColor:'#0c090b'
  },
  tarjeta2:{
    backgroundColor:'rgba(238, 202, 22, 0.93)'
  },

  tarjeta3:{
    backgroundColor:'orange',
    
  },
});
