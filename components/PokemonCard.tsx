import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function pokemonCard(props: PokemonCardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.url.split("/")[6]}.png`;
  return (
    <Pressable
    //router redirecciona
      onPress={() => router.push(`/pokemon/${props.name}`)}

      style={{ padding: 10, borderWidth: 1, alignItems: "center" }}
    >
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}