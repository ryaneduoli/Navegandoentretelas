import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { DivInput, Input, ImagemFiltro, DivCard, ImagemCard, CaixaTitulo, TextoCard, TextoCardMin } from "../Styles";
import { useNavigation } from "@react-navigation/native";

export default function CardDogs({titulo,imagem,idade, localidade, tipoIdade, genero, vacina, description}){
  const navigation =useNavigation();
  return (
    
    <DivCard>
        <ImagemCard  source ={require (`../img/${imagem}` )}></ImagemCard>
        <CaixaTitulo onPress = { () => navigation.navigate('details', {titulo:titulo, imagem:imagem, idade:idade, localidade:localidade, tipoIdade:tipoIdade, vacina:vacina, genero:genero, description:description})}>
        <TextoCard>{titulo}</TextoCard>
        <TextoCardMin>{localidade}</TextoCardMin>
        <TextoCardMin>{idade} {tipoIdade}</TextoCardMin>
        </CaixaTitulo>


    </DivCard>
  );
};


