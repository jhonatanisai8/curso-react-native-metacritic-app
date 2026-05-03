import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { getCharacters } from "../lib/metacritic";
import CharacterCard from "./CharacterCard";

const icono = require("../assets/icon.png");
export default function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getCharacters().then((chars) => {
      setCharacters(chars);
    });
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {characters.length === 0 ? (
        <ActivityIndicator color="#fff" size="large"></ActivityIndicator>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(character) => character.id}
          renderItem={({ item }) => <CharacterCard character={item} />}
        ></FlatList>
      )}
    </View>
  );
}
