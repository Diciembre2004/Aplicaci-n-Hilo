import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";
import { IconButton, MD3Colors } from 'react-native-paper';

const Inicio = ({navigation}) => {
    return(
    <View style={styles.container}>
        <View style={styles.actualizar}>
            <IconButton icon="clock" iconColor={MD3Colors.error50} size={25} onPress={() => console.log("Pressed")} />
            <IconButton icon="delete" iconColor={MD3Colors.error0} size={25} onPress={() => console.log("Pressed")} selected='false' />
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

export default Inicio;