import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button
} from 'react-native';
import Inicio from './Inicio';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('inicio');

  if (pantallaActual === 'inicio') {
    return (
      <Inicio
        onIngresar={() => setPantallaActual('registro')}
        onRegresar={() => Alert.alert('Aviso', 'Ya estás en la pantalla principal.')}
      />
    );
  }

  return (
    <RegistroEventoUniversitario
      onRegresar={() => setPantallaActual('inicio')}
    />
  );
}

function RegistroEventoUniversitario({ onRegresar }) {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Campos incompletos',
        'Debes llenar todos los campos.'
      );
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert(
        'Error',
        'El semestre debe ser un número.'
      );
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.subtitulo}>
          Opciones
        </Text>

        <View style={styles.fila}>
          <Text style={styles.texto}>
            ¿Asistirá al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />
        </View>

        <View style={styles.fila}>
          <Text style={styles.texto}>
            ¿Requiere constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />
        </View>

        <View style={styles.fila}>
          <Text style={styles.texto}>
            ¿Participará en actividades deportivas?
          </Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />
        </View>

        <TouchableOpacity
          style={styles.boton}
          onPress={enviarRegistro}
        >
          <Text style={styles.textoBoton}>
            Enviar Registro
          </Text>
        </TouchableOpacity>

        <View style={styles.botonCerrar}>
          <Button
            title="Cerrar sesión / Regresar a Inicio"
            color="#555"
            onPress={onRegresar}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },

  contenedor: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: 'white',
    padding: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    borderWidth: 1.5,
    borderColor: '#333',
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 6,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  texto: {
    fontSize: 16,
    flex: 1,
  },

  boton: {
    backgroundColor: 'green',
    padding: 15,
    marginTop: 15,
    borderRadius: 6,
  },

  textoBoton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botonCerrar: {
    marginTop: 15,
  },
});
