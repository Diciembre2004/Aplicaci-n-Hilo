import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";
import Myswitch from "../../elementos/switch";
import Button from "../../elementos/input";
import Lista from "../../elementos/lista";

import { IconButton, MD3Colors } from 'react-native-paper';

const Crear = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Lista/>
        <Myswitch/>
      </View>
    );
  };

const styles = StyleSheet.create({
    container:{

    },
    botoncolor:{
        color: 'red',
    },
    titulo:{

    }
});

export default Crear;