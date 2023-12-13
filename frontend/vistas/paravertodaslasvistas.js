import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../elementos/botones";

const Paravertodaslasvistas = ({navigation}) => {
    return(
    <ScrollView>	
    <View>
        <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} style={{width: 200, height: 200}}/>
        <Text>Usuarios:</Text>
        <Botones label="hola" icon="camera" mode="contained"/>
        <Botones texto="login" icon="clock" mode="outlined" onPress={() =>navigation.navigate('login')}/>
        <Botones texto="recuperar" onPress={() =>navigation.navigate('recuperar')}/>
        <Botones texto="registro" onPress={() =>navigation.navigate('registro')}/>
        <Botones texto="verificar" onPress={() =>navigation.navigate('verificar')}/>
        
        <Text>Aplicacion:</Text>
        <Botones texto="crear" onPress={() =>navigation.navigate('crear')}/>
        <Botones texto="inicio" onPress={() =>navigation.navigate('inicio')}/>
        <Botones texto="micuenta" onPress={() =>navigation.navigate('micuenta')}/>
    </View>
    </ScrollView>
)
}
export default Paravertodaslasvistas;