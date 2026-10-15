import { Text, Image, Button, View } from 'react-native';
export const Saludos2 = () => {
    return (

        <View>

            <Text>Hola RN: Soy un componente nuevo!</Text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title='Presiona para saludar'></Button>

        </View>

    )
}