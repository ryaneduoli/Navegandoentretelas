import React from 'react'
import {View,Text, Image, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TituloUsuario, HeaderNav, IconeHeader } from "../Styles"


export default function Header(){
    const usuario = 'Usuario'
    return(
        <HeaderNav>
            <IconeHeader source={require('../img/🦆 icon _profile circled_.png')}/><TituloUsuario>Olá, {usuario}</TituloUsuario>
        </HeaderNav>        
    );
}