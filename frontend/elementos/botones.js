import * as React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export function Botones(props) {
  const { label, icon, contained, textColor, buttonColor, texto, type } = props;

    const styles = {
        botones: {
        width: 350,
        fontSize: 15,
        },
        label: {
        marginTop: 10,
        color: 'red',
        },
    };

    return (
        <View>
        <Button
            icon={icon}
            type={type}
            label={texto}
            style={styles.botones}
            textColor="black"
            buttonColor="lightgray"
        />
        </View>
    );
}