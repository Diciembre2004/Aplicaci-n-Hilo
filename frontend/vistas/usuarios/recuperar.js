import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";

const Recuperar = ({navigation}) => {
    return(
    <View>
        <Text style={styles.titulo}>Recupere su cuenta</Text>
        <Text>Ingrese su mail. Se le enviara un codigo de 6 digitos.</Text>
        <Input texto="nombre@dominio.com" tipo="email"></Input>

        <Botones text="Enviar" onPres={() =>navigation.navigate('verificar')}/>
    </View>
)
}
const styles = StyleSheet.create({
    container:{

    },
    titulo:{

    }
});
export default Recuperar;