import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>REGISTRO DE EVENTO UNIVERSITARIO</Text>


      <TextInput
          style={styles.input}
            placeholder="Escribe tu nombre completo."
    
          />


        <TextInput
          style={styles.input}
            placeholder="Escribe tu  Carrera."
        />

        <TextInput
          style={styles.input}
            placeholder="Escribe tu Cuatrimestre."
        />


        <Text> OPCIONES </Text>


        <Button></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap : 70,

  },

   input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  },

});