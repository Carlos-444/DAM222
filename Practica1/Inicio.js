
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Inicio({ onRegresar }) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto" />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contenido}>
          <Text style={styles.titulo}>Iniciar sesión</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu correo"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Escribe tu contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry
          />

          <View style={styles.boton}>
            <Button
              title="Ingresar"
              onPress={() => alert('Sesión iniciada')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Regresar"
              onPress={onRegresar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contenido: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  },
  boton: {
    width: '100%',
    marginTop: 10
  }
});
