import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { DivInput, Input, ImagemFiltro } from "../Styles";

const InputTexto = (props) => {
  return (
    <DivInput>
      <Input
        onChange={props.onChange}
        value={props.value}
        placeholder="DIGITE AQUI"
      />
       <ImagemFiltro  source={require('../img/🦆 icon _search normal 1_.svg')}></ImagemFiltro>
    </DivInput>
  );
};

export default InputTexto;
