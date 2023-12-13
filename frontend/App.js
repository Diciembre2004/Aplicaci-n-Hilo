import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// importabamos las vistas que usaremos
import Bienvenida from "./vistas/usuarios/bienvenida";
import Login from "./vistas/usuarios/login";
import Registro from "./vistas/usuarios/registro";
import Recuperar from "./vistas/usuarios/recuperar";
import Inicio from "./vistas/aplicacion/inicio";
import Crear from "./vistas/aplicacion/crear";
import Micuenta from "./vistas/aplicacion/micuenta";
import Paravertodaslasvistas from "./vistas/paravertodaslasvistas";
import Verificar from './vistas/usuarios/verificar';

//------------------------------------------------------------------------------------
const Tabs = createMaterialBottomTabNavigator();
const TabNav = () => {
return (
<Tabs.Navigator activeColor='black' barStyle={{ backgroundColor: '#F52C01', height:70 }}>
  <Tabs.Screen 
  name="Home" 
  component={Home} 
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="home" color={color} size={26} />
    ),
  }}

  />
  <Tabs.Screen name="crear" component={Crear} />
  <Tabs.Screen name="inicio" component={Inicio} />
</Tabs.Navigator>
);
};
//--------------------------------------------------------------------------------------

// contiene todo
const Stack = createNativeStackNavigator();

// corre todas las vistas, aca aparece en toda la pagina, arriba de las vistas
const StackNav = () => {
  return (
      <Stack.Navigator> 
        <Stack.Screen name="paravertodaslasvistas" component={Paravertodaslasvistas} />
        
        <Stack.Screen name="bienvenida" component={Bienvenida} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="registro" component={Registro} />
        <Stack.Screen name="recuperar" component={Recuperar} />
        <Stack.Screen name="verificar" component={Verificar} />

        <Stack.Screen name="crear" component={Crear} />
        <Stack.Screen name="inicio" component={Inicio} />
        <Stack.Screen name="micuenta" component={Micuenta} />

        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
  );
}
export default function App() {

return (
  <NavigationContainer>
    <StatusBar backgroundColor={"red"} />
    <StackNav/>
  </NavigationContainer>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}
