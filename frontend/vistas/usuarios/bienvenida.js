import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { TextInput } from "../../elementos/input";
// todas las etiquetas deben estar importadas

const Bienvenida = ({navigation}) => {
    return( //los View son como divs, tienen atributos como la hoja de estilo
        <View style={styles.container}>
            <View style={styles.imagen}></View>

            <View style={styles.boton}> 

                <View style={styles.titulo}>
                    <Text>Te damos la bienvenida a nombre de app. Por favor registrese o inicie sesion.</Text>
                </View>

                <Botones mode='elevated' text="Registrarse" onPres={() =>navigation.navigate('registro')}/>

                <Botones text="Login" onPres={() =>navigation.navigate('login')}/>
            </View>
        </View>
    )
}

//aca estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagen: {
    width: 200, 
    height: 200, 
    backgroundColor: 'lightgray',
  },
  boton: {
    marginTop: 20, 
  },
  titulo: {
    margin: 20, 
    textAlign: 'center', 
  },
});



export default Bienvenida;