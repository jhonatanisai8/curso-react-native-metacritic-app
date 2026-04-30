import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

// importamos el codigo
const icono = require("./assets/icon.png");
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image fadeDuration={1} source={icono} style={styles.image} /> */}
      {/* <Image
        source={{
          uri: "https://i.pinimg.com/1200x/8b/f9/7c/8bf97c46f37c04605fa0d45be069d4d4.jpg",
        }}
        style={styles.image}
      /> */}
      <StatusBar style="light" />
      {/* <Text
        style={{
          color: "#fff",
        }}
      >
        Tenemos aqui la app.
      </Text> */}
      {/* boton nativo de react native */}
      {/* <Button title="Presioname" onPress={() => alert("Hola")} /> */}
      {/* <TouchableHighlight underlayColor={"#09f"} onPress={() => alert("Hola")}>
        <Text style={{ color: "#fff" }}>Presioname</Text>
      </TouchableHighlight> */}
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#09f" : "rgb(204, 23, 84)",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? "Presionado!" : "Presioname"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 215,
    height: 294,
    resizeMode: "contain",
  },
});
