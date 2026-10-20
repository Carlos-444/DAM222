import {Text, View, Button, StyleSheet} from 'react-native';
import {useState} from 'react';


export const Perfil=({nombre,carrera,materia,cuatri,style})=>{
    const[mostrar,setMostrar]=useState(false);
    return(
        
        <View style={[estilos.tarjeta,style]}>
        <Text style={estilos.nombre}>{nombre}</Text>

        {mostrar &&
            <>
        <Text style={[estilos.carrera]}> {carrera}</Text>
        <Text style={[estilos.otroTexto]}>{materia}</Text>
        <Text style={[estilos.otroTexto]}>{cuatri}</Text>
        </>
    }
    <Button title="Ver Perfil" onPress={()=>setMostrar(!mostrar)}/>
        </View>
    )
}

const estilos=StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:800,
        textTransform:'uppercase',
        color:'gray',
        
    },
    carrera:{
        fontSize:18,
        color:'red',
        fontFamily:'monospace',
    },
    otroTexto:{
        fontSize:14,
        fontFamily:'monospace',
        fontstyle:'italic',
        color:'purple',

    },
    tarjeta:{
        borderWidth:3,
        borderRadius:10,
        padding:12,
        margin:5,

    },


    

});