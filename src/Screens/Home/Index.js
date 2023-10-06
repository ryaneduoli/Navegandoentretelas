import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ConteudoBusca, DivHeader, DivNav, Input } from '../../Styles';
import Header from '../../components/Header';
import InputTexto from '../../components/InputTexto'
import BtnFiltro from '../../components/BtnFiltro';
import CarrouselDogs from '../../components/CarrouselDogs';
import CorpoDogs from '../../components/CorpoDogs';

export default function Home() {

  return (
  
      <DivHeader>
        <Header></Header>
        <DivNav>
        <ConteudoBusca> <InputTexto></InputTexto> <BtnFiltro></BtnFiltro></ConteudoBusca>
        <CarrouselDogs></CarrouselDogs>
        </DivNav>
        <CorpoDogs></CorpoDogs>
        

      </DivHeader>

    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
