import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getCharacters } from "./lib/metacritic";

const icono = require("./assets/icon.png");
export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((chars) => {
      setCharacters(chars);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {characters.map((character) => (
          <View key={character.id} style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.title}>{character.name}</Text>
            {character.phrases && character.phrases.length > 0 && (
              <View>
                <Text style={styles.descripcion}>Frases típicas:</Text>
                {character.phrases.map((phrase, index) => (
                  <Text key={index} style={styles.descripcion}>
                    "{phrase}"
                  </Text>
                ))}
              </View>
            )}
            <Text style={styles.score}>{character.status}</Text>
          </View>
        ))}
      </ScrollView>
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
  card: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 48,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    color: "#fff",
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
