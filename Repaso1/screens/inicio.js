import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    View, Text, TextInput, Image, ImageBackground,
    ActivityIndicator, Pressable, FlatList, Alert,
    KeyboardAvoidingView, TouchableWithoutFeedback,
    Keyboard, Platform, SafeAreaView, StyleSheet,
} from "react-native";

export default function inicio() {
    const [splash, setSplash] = useState(true);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [guardando, setGuardando] = useState(false);
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const t = setTimeout(() => setSplash(false), 2000);
        return () => clearTimeout(t);
    }, []);

    const agregarLibro = () => {
        if (!titulo.trim() || !autor.trim() || !genero.trim()) {
            Alert.alert("Campos incompletos", "Todos los campos son obligatorios.");
            return;
        }
        setGuardando(true);
        setTimeout(() => {
            const nuevo = {
                id: Date.now().toString(),
                titulo, autor, genero
            };
            setLibros([nuevo, ...libros]);
            setTitulo("");
            setAutor("");
            setGenero("");
            setGuardando(false);
            Alert.alert("Libro agregado", "Libro guardado correctamente.");
        }, 4000);
    };

    if (splash) {
        return (
            <SafeAreaView style={styles.splash}>
                <Image source={require("../assets/escuela.png")} style={styles.logo} />
                <Text style={styles.textSplash}>Repaso 2</Text>
            </SafeAreaView>
        );
    }

    return (
        <ImageBackground
            source={{ uri: "https://media.admagazine.com/photos/6a691eee693e39d4e0b49540/master/w_1920,c_limit/_B0A5353-1%20(com%20filtro)-alta.jpeg" }}
            style={styles.fondo}
            resizeMode="cover"
        >
            <View style={styles.capa}>
              <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.contenedor}>
                    <Text style={styles.tituloPrincipal}>Catálogo de Libros</Text>

                    <TextInput style={styles.input} placeholder="Título del libro" value={titulo} onChangeText={setTitulo} />
                    <TextInput style={styles.input} placeholder="Autor" value={autor} onChangeText={setAutor} />
                    <TextInput style={styles.input} placeholder="Género" value={genero} onChangeText={setGenero} />

                    <Pressable style={styles.boton} onPress={agregarLibro}>
                      <Text style={styles.textoBoton}>Agregar Libro</Text>
                      </Pressable>

                      {guardando && (
                      <View style={styles.cargando}>
                      <ActivityIndicator size="large" color="white" />
                      <Text style={styles.textoGuardando}>Guardando libro...</Text>
                      </View>
                        )}

                      <Text style={styles.total}>Total de libros: {libros.length}</Text>

                      <FlatList data={libros}keyExtractor={(item) => item.id}renderItem={({ item }) => (
                      <View style={styles.tarjeta}>
                          <Text style={styles.nombreLibro}>{item.titulo}</Text>
                          <Text>Autor: {item.autor}</Text>
                          <Text>Género: {item.genero}</Text></View>
                            )}
                          />
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    <StatusBar style="light" />
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },

    textSplash: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1f2937",
    },

    fondo: {
        flex: 1,
        backgroundColor: "#1e293b",
    },

    capa: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
    },

    contenedor: {
        flex: 1,
        padding: 20,
    },

    tituloPrincipal: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        marginBottom: 20,
    },

    input: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },

    boton: {
        backgroundColor: "#1677d2",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },

    textoBoton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },

    cargando: {
        alignItems: "center",
        marginBottom: 20,
    },

    textoGuardando: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },

    total: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
    },

    tarjeta: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },

    nombreLibro: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 5,
    },
});