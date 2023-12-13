import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";

const Micuenta = ({navigation}) => {
    return(
    <View style={styles.container}>
        <View style={styles.titulo}>
            <Text>Recordatorios.</Text>
        </View>
        <View>
            <Text style={styles.h2}>Nombre</Text>
            <Text style={styles.vacio}>______</Text>

            <Text style={styles.h2}>Email</Text>
            <Text style={styles.vacio}>______</Text>

            <Text style={styles.h2}>Contraseña</Text>
            <Text style={styles.vacio}>______</Text>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    container:{

    },
    titulo:{

    }
});

export default Micuenta;