import React, { Component } from "react";
import { DivCarrousel, FlatCarrousel, FlatCarrouselDogs, TextCarrosel } from "../Styles";
import Cachorros from "../data/Cachorros";
import CardDogs from "./CardDogs";
import Dogs from "../data/Dogs";
import CardCorpoDogs from "./CardCorpoDogs";
import { FlatList } from "react-native";

const CorpoDogs = (props) => {
    const gap = 32
  return (
    <FlatCarrouselDogs>
        
       
     <FlatList
      contentContainerStyle={{gap}}
      data={Dogs}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <CardCorpoDogs
        localidade = {item.localidade}
        tipoIdade = {item.tipoIdade}
          titulo={item.nome}
          idade={item.idade}
          imagem={item.url}
          sexo={item.sexo}
        ></CardCorpoDogs>
      )}
     />
     </FlatCarrouselDogs>
    
  );
};

export default CorpoDogs;