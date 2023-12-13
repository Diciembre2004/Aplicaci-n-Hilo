import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";

const Verificar = ({navigation}) => {
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Recupere su cuenta</Text>
        <Text>Ingrese el codigo 6 digitos.</Text>
        <Input texto="000000" tipo="numeric" ico="account"></Input>

        <Botones text="Enviar" onPres={() =>navigation.navigate('inicio')}/>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        
    },
    titulo:{

    }
});
export default Verificar;