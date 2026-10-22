/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, text } from 'react-native';

export default function Pressable() {
  return (
    <View style={styles.container}>

         <text>Practica de israel</text>
      


      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
