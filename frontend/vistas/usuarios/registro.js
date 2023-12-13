import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";

const Registro = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.sec30}>
                <Input texto="Ingrese su nombre" tipo="text" ico="account"></Input>
                <Input texto="Ingrese su dni" tipo="numeric" ico="account"></Input>
                <Input texto="Ingresar email" tipo="email" ico="account"></Input>
                <Input texto="Ingresar contraseña" tipo="numeric" ico="eye"></Input>
                <Input texto="confirmar contraseña" tipo="numeric" ico="eye"></Input>

                <Botones text="Crear" onPres={() =>navigation.navigate('inicio')}/>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex: 1
    }
});

export default Registro;