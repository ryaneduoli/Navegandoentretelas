import { View, Text } from 'react-native'
import React from 'react'
import { Bolhas, BotaoAdote, CaixaTitulo, CorpoDetails, DivHeader, GridDetails, IconAdote, IconeHeader, ImageDetails, InformationDetails, ItemGridDetails, ItemGridDetailsAmarelo, ItemGridDetailsAzul, ItemGridDetailsLaranja, PerfilArea, TextAdote, TextoCardDog, TextoGrid, TituloGrid, TituloInformation, TituloUsuario } from '../../Styles'
import { useRoute } from '@react-navigation/core'

export default function Details() {

    const routes = useRoute();
    const usuario = 'usuario'
  return (
   <CorpoDetails>
    <ImageDetails  source ={require (`../../img/${routes.params.imagem}` )}></ImageDetails>
    <InformationDetails> 
        <TituloInformation>{routes.params.titulo}</TituloInformation>
        <GridDetails>
           
            
            
            <ItemGridDetails> <TituloGrid>Idade</TituloGrid></ItemGridDetails>
            <ItemGridDetails> <TituloGrid>Gênero</TituloGrid> </ItemGridDetails>
            <ItemGridDetails> <TituloGrid>Vacinas</TituloGrid> </ItemGridDetails>
            <ItemGridDetailsLaranja>  <TextoGrid>{routes.params.idade} {routes.params.tipoIdade}</TextoGrid> </ItemGridDetailsLaranja>
            <ItemGridDetailsAzul> <TextoGrid>{routes.params.genero}</TextoGrid> </ItemGridDetailsAzul>
            <ItemGridDetailsAmarelo> <TextoGrid>{routes.params.vacina}</TextoGrid> </ItemGridDetailsAmarelo>
           
             
             
        </GridDetails>
        <TextoGrid>{routes.params.description}</TextoGrid>
        <PerfilArea> <IconeHeader source={require('../../img/🦆 icon _profile circled_.svg')}/><TituloUsuario>Olá,</TituloUsuario></PerfilArea>
        <BotaoAdote><TextAdote>ADOTAR</TextAdote> <IconAdote source={require('../../img/🦆 icon _Paw_.svg')}/></BotaoAdote>
        </InformationDetails>
        <Bolhas source={require('../../img/Group 231.svg')} />
     
     
    
   </CorpoDetails>
  )
}