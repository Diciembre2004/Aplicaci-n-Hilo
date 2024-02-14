import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Botones, Link } from "../elementos/botones";
import { Input } from "../elementos/input";
import { createUser } from "../../api";

const rutaimg = "../assets/singup.png";
const apisu = "URL_PARA_CREAR_USUARIO";

const Registro = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirpassword, setConfirpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    const data = await createUser(username, email, password);

    if (data.success) {
      navigation.navigate("NabTavs");
    } else {
      data.status
        ? setErrorMessage("Ya existe un usuario con el email ingresado")
        : setErrorMessage("No se pudo crear la cuenta, inténtelo nuevamente");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sec1}>
          <Image source={require(rutaimg)} style={styles.img} />
          <Input
            texto="Nombre de usuario"
            tipo="text"
            ico="account"
            cambios={setUsername}
          />
          <Input
            texto="Ingresar email"
            tipo="email"
            ico="mail"
            cambios={setEmail}
          />
          <Input
            texto="Contraseña"
            tipo="password"
            ico="eye"
            cambios={setPassword}
          />
          <Input
            texto="Confirmar contraseña"
            tipo="password"
            ico="eye"
            cambios={setConfirpassword}
          />
          {errorMessage ? <Subtitulo texto={errorMessage} font={15} /> : null}
        </View>
        <View style={styles.sec2}>
          <Botones
            texto="Crear cuenta"
            onPres={() => {
              if (
                email.trim().length !== 0 &&
                password.trim().length !== 0 &&
                username.trim().length !== 0 &&
                confirpassword.trim().length !== 0
              ) {
                if (password === confirpassword) {
                  setErrorMessage("");
                  handleSignup();
                } else {
                  setErrorMessage("Las contraseñas no coinciden");
                }
              } else {
                setErrorMessage("Completar los datos");
              }
            }}
          />
          <Link
            texto="¿Ya tienes cuenta? Inicia sesión aquí"
            onPres={() => navigation.navigate("Login")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sec1: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    height: 650,
  },
  sec2: {
    flex: 0.3,
    alignItems: "center",
    gap: 10,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 25,
  },
});

export default Registro;
