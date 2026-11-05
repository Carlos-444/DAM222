/*1. Zona  de importación de librerías y componentes*/
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, FlatList, SectionList } from 'react-native';

const datosFlat = [
  {id: '1', nombre: 'juan'},
  {id: '2', nombre: 'Carlos'},
  {id: '3', nombre: 'Leo'},
  {id: '5', nombre: 'Frank'},
];

const datosSection = [
  {
    titulo: 'Frutas',
    data: ['Manzana', 'Platano'],
  },
  {
    titulo: 'Verduras',
    data: ['Zanahoria', 'lechuga'],
  },
];

export default function SectionListScreen() {
  return (
    <View style={styles.container}>
      <Text>Practica de Edgar Omar</Text>
      
      <Text style={styles.titulo}>Ejemplo de FlatList</Text>
      <FlatList
        data={datosFlat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nombre}</Text>
        )}
      />

      <Text style={styles.titulo}>Ejemplo de SectionList</Text>
      <SectionList
        sections={datosSection}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={[styles.titulo, styles.encabezado]}>{section.titulo}</Text>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    paddingTop: 50,        
    paddingHorizontal: 20, 
    backgroundColor: '#C4F3FF', 
  },

  titulo: {
    fontSize: 20,          
    fontWeight: 'bold',    
    marginTop: 20,         
    marginBottom: 10,      
    textAlign: 'center',   
    color: 'purple',
  },

  encabezado: {
    fontSize: 16,          
    fontWeight: 'bold',    
    backgroundColor: 'gold', 
    padding: 5, 
    color: 'white'       
  },

  item: {
    fontSize: 14,       
    padding: 10,           
    borderBottomWidth: 1,  
    borderBottomColor: '#121212', 
  },
});
