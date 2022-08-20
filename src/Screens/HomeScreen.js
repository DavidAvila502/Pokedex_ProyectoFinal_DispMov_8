import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "../Components/Search";
import ListaPokemones from "../Components/ListaPokemones";

import GetPokemons from "../Hooks/GetPokemons";

const HomeScreen = () => {
  const [Pokemons, setPokemons] = useState(false);

  const [result, GetInfoPokemons] = GetPokemons();

  const [colums, setColums] = useState(1);

  useEffect(() => {
    GetInfoPokemons();
  }, []);

  useEffect(() => {
    setPokemons(result);
  }, [result]);

  if (result == false) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ fontSize: 20, color: "gray" }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search
        pokemones={result}
        setPokemons={setPokemons}
        setColums={setColums}
        colums={colums}
      />
      <ListaPokemones pokemones={Pokemons} colums={colums} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
