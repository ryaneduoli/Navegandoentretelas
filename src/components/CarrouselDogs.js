import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { DivCarrousel, FlatCarrousel, TextCarrosel } from "../Styles";
import Cachorros from "../data/Cachorros";
import CardDogs from "./CardDogs";

const CarrouselDogs = (props) => {
    const gap = 12
  return (
    <DivCarrousel>
        <TextCarrosel>Novos animais</TextCarrosel>
     <FlatCarrousel
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap}}
      horizontal={true}
      data={Cachorros}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <CardDogs
        localidade = {item.localidade}
        tipoIdade = {item.tipoIdade}
          titulo={item.nome}
          idade={item.idade}
          imagem={item.url}
          vacina={item.vacina}
          genero={item.genero}
          description={item.description}
        ></CardDogs>
      )}
     />
    </DivCarrousel>
  );
};

export default CarrouselDogs;
