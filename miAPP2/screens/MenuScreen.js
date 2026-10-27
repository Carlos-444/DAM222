/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import ImageBackgroung from './ImageBackgroung';
import FlatList from './FlatList';
import Pressable from './Pressable';
import ActivityIndicator from './ActivityIndicator';
import Modal from './Modal';
import TextInput from './TextInput';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu')

  switch (screen) {

    case 'tarjetas':
      return <Tarjetas />

    case 'safeScreen':
      return <SafeScreen />

    case 'imageBackgroung':
      return <ImageBackgroung />

    case 'activityIndicator':
      return <ActivityIndicator />

    case 'flatList':
      return <FlatList />

    case 'pressable':
      return <Pressable />

    case 'modal':
      return <Modal />

    case 'textInput':
      return <TextInput />

    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <Text>Menu de Practicas</Text>

          <Button title='Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>

          <Button title='SafeAreaView' onPress={()=>setScreen('safeScreen')}></Button>

          <Button title='ActivityIndicator' onPress={()=>setScreen('activityIndicator')}></Button>

          <Button title='ImageBackgroung' onPress={()=>setScreen('imageBackgroung')}></Button>

          <Button title='FlatList' onPress={()=>setScreen('flatList')}></Button>

          <Button title='Pressable' onPress={()=>setScreen('pressable')}></Button>

          <Button title='Modal' onPress={()=>setScreen('modal')}></Button>

          <Button title='TextInput' onPress={()=>setScreen('textInput')}></Button>

          <StatusBar style="auto" />

        </View>
      );
  }//llave de switch
}//funcion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    
  },
   

});
