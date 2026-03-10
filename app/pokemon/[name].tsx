import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function PokemonData() {
    //pone la aparteextra de la url despues de /
    const params = useLocalSearchParams();
  return (
    <View>
      <Text>PokemonData</Text>
      <Text>{params.name}</Text>
    </View>
  )
}