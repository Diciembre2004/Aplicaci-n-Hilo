import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.form}></View>
            <View style={styles.boton}>
                <Botones text="Volver" onPres={() =>navigation.navigate('bienvenida')}/>

                <View style={styles.titulo}>
                    <Text>Inicie sension</Text>
                </View>

                <Text>Ingrese su email</Text>
                <Input texto="Ingrese su email" tipo="email" ico="account"></Input>
                <Text>Ingrese su contraseña</Text>
                <Input texto="Ingrese su contraseña" tipo="numeric" ico="eye"></Input>

                <Botones text="Ingresar" onPres={() =>navigation.navigate('inicio')}/>


                <Botones text="Olvidaste tu contraseña? Recupera tu cuenta aqui" onPres={() =>navigation.navigate('recuperar')}/>

                <Botones text="Registrarme" onPres={() =>navigation.navigate('registro')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        flex: 1
    },
    boton:{
        top:15,
        backgroundColor:'red',
        height: 30,
        flex: 0.1
    },
    form:{
        top:5,
        backgroundColor: 'grey',
        flex: 0.6
    },
});

export default Login;