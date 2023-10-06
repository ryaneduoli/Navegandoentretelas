import { Image, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { Filtro, ImagemFiltro} from "../Styles"


const BtnFiltro = (props) =>{

  
     
    return (
      
      
        <Filtro> <ImagemFiltro  source={require('../img/filtersearch.svg')}></ImagemFiltro> </Filtro>
 
        
      
    )
  }


export default BtnFiltro