import React from "react";
import { TextInput, View } from "react-native";
import style from "./Components.module.css";

type NumberInput = {
    placeholder: string;
    styles?: any;
}
export default function NumberInput(props: NumberInput) {
  return (
    <View style={props.styles}>
      <TextInput style={style.textInput} keyboardType="number-pad" placeholder={props.placeholder} maxLength={10} multiline={false}/>
      <View style={style.inputLine} />
    </View>
  );
}
