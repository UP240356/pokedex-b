import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

//sourse indica la fuente (de donde viene la imagen )
export default function pokemonCard(props: PokemonCardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.url.split("/")[6]}.png`;
  return (
    <View style={{ padding: 10, borderWidth: 1, alignItems: "center" }}>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </View>
  );
}