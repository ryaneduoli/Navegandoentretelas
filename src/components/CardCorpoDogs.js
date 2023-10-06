import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { DivInput, Input, ImagemFiltro, DivCardCorpo, ImageDog, CaixaTitulo, TextoCard, TextoCardMin, DivCardCorpoImageDogn, CaixaTituloDogs, TextoCardDog, TextoCardMinDOg, AlinhamentoCard, ImageIcones, ImageIconesCora, AlinhamentoCardItem, BtnItem, AlinhamentoCardItemFinal, TextoCardMinDOgTwo } from "../Styles";

export default function CardCorpoDogs({titulo,imagem,idade, localidade, tipoIdade, sexo}){
  return (
    
    <DivCardCorpo>
        <ImageDog  source ={require (`../img/${imagem}` )}></ImageDog>
        <CaixaTituloDogs>
        <TextoCardDog>{titulo}</TextoCardDog>
        <AlinhamentoCard>
            <AlinhamentoCardItem>
        <ImageIcones  source ={require (`../img/localizacao 1.svg` )}></ImageIcones>
        <TextoCardMinDOg>{localidade}</TextoCardMinDOg>
        </AlinhamentoCardItem>
        <ImageIconesCora  source ={require (`../img/coracao (1) 1.svg` )}></ImageIconesCora>
        </AlinhamentoCard>
        <AlinhamentoCardItemFinal> <BtnItem> <TextoCardMinDOgTwo>{sexo} </TextoCardMinDOgTwo></BtnItem>
        <BtnItem> <TextoCardMinDOgTwo>{idade} {tipoIdade}</TextoCardMinDOgTwo></BtnItem>
       </AlinhamentoCardItemFinal>

       
       
        </CaixaTituloDogs>


    </DivCardCorpo>
  );
};


