import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

// importamos el codigo
const icono = require("./assets/icon.png");
export default function App() {
  return (
    <View style={styles.container}>
      <Image fadeDuration={1} source={icono} style={styles.image} />
      <StatusBar style="auto" />
      <Text>Tenemos aqui la app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09f",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
});
