import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PokemonCard from "@/componets/PokemonCard";


export default function Index() {
  const [results, setResults] = useState<any[]>([]); //guardan los datos en el resuts
  
//se ejecuta al inicio 
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  //mandan a llamar los datos de la url
  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",//get solo obtiene datos
    });

    //se hace la peticion a internet
    const data = await response.json();
    console.log(data);
    setResults(data.results); //guarda pokemon
  };

  //.map() recorre todos los elementos del arreglo.
  //key identifica cada elemento de la lista 
  return (
    <ScrollView>
      {results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </ScrollView>
  );
}