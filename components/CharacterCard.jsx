import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function CharacterCard({ character }) {
  return (
    <View key={character.id} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.title}>{character.name}</Text>
      {character.phrases && character.phrases.length > 0 && (
        <View style={styles.frases}>
          <Text>Frases típicas:</Text>
          {character.phrases.map((phrase, index) => (
            <Text style={styles.frase} key={index}>
              "{phrase}"
            </Text>
          ))}
        </View>
      )}
      <Text style={styles.score}>{character.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  frases: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingRight: 5,
    paddingLeft: 5,
  },
  frase: {
    fontSize: 16,
    color: "#04c059",
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EAB464",
    marginTop: 10,
  },
});
