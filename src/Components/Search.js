//Search

import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Ionicons";

const Search = ({ setPokemons, pokemones, setColums, colums }) => {
  const filtrador = (text) => {
    let pokemones_coincidencia = pokemones.filter((pokemon) => {
      if (pokemon.id.toString() == text) {
        return pokemon;
      }
    });

    if (pokemones_coincidencia.length < 1) {
      pokemones_coincidencia = pokemones.filter((pokemon) => {
        if (pokemon.name.includes(text.toLowerCase())) {
          return pokemon;
        }
      });
    }

    setPokemons(pokemones_coincidencia);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar pokemon..."
          placeholderTextColor={"#0DFFDA"}
          style={styles.input}
          onChangeText={(text) => filtrador(text)}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity onPress={() => setColums(colums == 1 ? 2 : 1)}>
          {colums == 1 ? (
            <Icon1 name="menu" color={"#0DFFDA"} size={42} />
          ) : (
            <Icon2 name="ios-grid" color={"#0DFFDA"} size={42} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  inputContainer: {
    borderWidth: 2,
    borderColor: "#0DFFDA",
    borderRadius: 10,
    padding: 2,
    marginRight: 20,
  },

  input: {
    fontSize: 20,
    height: 50,
    width: 275,
    marginLeft: 10,
  },
});

export default Search;
