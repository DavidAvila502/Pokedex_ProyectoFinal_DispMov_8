//ListaPokemones

import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ElementoLista from "./ElementoLista";

const ListaPokemones = ({ pokemones, colums }) => {
  return (
    <View style={styles.container}>
      <FlatList
        key={colums}
        numColumns={colums}
        data={pokemones}
        keyExtractor={(key) => key.name}
        renderItem={({ item }) => (
          <ElementoLista pokemon={item} colums={colums} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 115,
  },
});

export default ListaPokemones;
