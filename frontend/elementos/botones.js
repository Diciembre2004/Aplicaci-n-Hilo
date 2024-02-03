import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export function Botones(props) {
  const { text, onPress } = props;

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.botones}>
        <Text style={styles.texto}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  botones: {
    width: 350,
    borderColor: "red",
    borderWidth: 1,
    margin: 10,
    padding: 2,
  },
  texto: {
    textAlign: "center",
  },
});
