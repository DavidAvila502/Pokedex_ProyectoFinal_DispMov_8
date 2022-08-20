//ElementoLista
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ElementoLista = ({ pokemon, colums }) => {
  if (colums == 1)
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.cardStyles}>
            <Image
              source={{
                uri: pokemon.sprites.other["official-artwork"].front_default,
              }}
              style={styles.imageStyle}
            />
            <View style={styles.cardBlue}>
              <Text style={styles.nombre}>{pokemon.name}</Text>
              <View style={styles.numberContainer}>
                <Text style={styles.numeroStyles}>{pokemon.id}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  else
    return (
      <View style={styles.cuadricula_container}>
        <View>
          <View style={styles.cuadricula_cardStyles}>
            <Image
              source={{
                uri: pokemon.sprites.other["official-artwork"].front_default,
              }}
              style={styles.cuadricula_imageStyle}
            />
            <View style={styles.cuadricula_cardBlue}>
              <View style={styles.cuadricula_numberContainer}>
                <Text style={styles.cuadricula_numeroStyles}>
                  {pokemon.id} -
                </Text>
              </View>
              <Text style={styles.cuadricula_nombre}>{pokemon.name}</Text>
            </View>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  cardStyles: {
    backgroundColor: "white",
    height: 61,
    width: 333,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  imageStyle: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
  cardBlue: {
    backgroundColor: "#30A7D7",
    height: 61,
    width: 232,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nombre: {
    color: "white",
    fontSize: 17,
    marginLeft: 20,
    marginVertical: 20,
  },
  numberContainer: {
    // height: 100,
    // width: 40,
    marginRight: 7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 5,
  },

  numeroStyles: {
    color: "white",
    fontSize: 18,
  },

  //CUANDRICULA

  cuadricula_cardStyles: {
    backgroundColor: "white",
    height: 149,
    width: 150,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "column",
  },
  cuadricula_imageStyle: {
    height: 120,
    width: 120,
    marginHorizontal: 20,
  },
  cuadricula_cardBlue: {
    backgroundColor: "#30A7D7",
    height: 30,
    width: 150,

    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  cuadricula_nombre: {
    color: "white",
    fontSize: 17,
    marginLeft: 5,
  },
  cuadricula_numberContainer: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  cuadricula_numeroStyles: {
    color: "white",
    fontSize: 17,
  },
});

export default ElementoLista;
