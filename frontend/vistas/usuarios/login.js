import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Botones } from "../../elementos/botones";
import { Input } from "../../elementos/input";
import { checkLogin } from "../../api";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = async () => {
    const data = await checkLogin(email, contrasena);

    if (data.succes) {
      navigation.navigate("inicio");
    } else {
      console.log("error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>
      <View style={styles.boton}>
        <Botones
          text="Volver"
          onPress={() => navigation.navigate("bienvenida")}
        />

        <View style={styles.titulo}>
          <Text>Inicie sension</Text>
        </View>

        <Text>Ingrese su email</Text>
        <Input
          texto="Ingrese su email"
          tipo="email"
          ico="account"
          value={email}
          onChange={setEmail}
        ></Input>
        <Text>Ingrese su contraseña</Text>
        <Input
          texto="Ingrese su contraseña"
          tipo="numeric"
          ico="eye"
          value={contrasena}
          onChange={setContrasena}
        ></Input>

        <Botones text="Ingresar" onPress={() => handleLogin()} />

        <Botones
          text="Olvidaste tu contraseña? Recupera tu cuenta aqui"
          onPress={() => navigation.navigate("recuperar")}
        />

        <Botones
          text="Registrarme"
          onPress={() => navigation.navigate("registro")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  boton: {
    top: 15,
    backgroundColor: "red",
    height: 30,
    flex: 0.1,
  },
  form: {
    top: 5,
    backgroundColor: "grey",
    flex: 0.2,
  },
});

export default Login;
