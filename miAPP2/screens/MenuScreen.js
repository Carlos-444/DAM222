/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet,Text, Button } from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import imageBackogroung from './ImageBackgroung';
import FlatList from './FlatList';
import Pressable from './Pressable';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu')

  switch (screen) {

    case 'tarjetas':

      return <Tarjetas />

    case 'safeScreen':

      return <SafeScreen />
    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <text>Menu de Practicas</text>

          <Button title='Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>

          <Button title='SafeAreaView' onPress={()=>setScreen('safeScreen')}></Button>

           <text>Menu de Practicas</text>

          <Button title='Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>

          <Button title='SafeAreaView' onPress={()=>setScreen('safeScreen')}></Button>

          



          <StatusBar style="auto" />

        </View>
      );
  }//llave de switcw
}//funcion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
