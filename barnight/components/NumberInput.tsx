import React from "react";
import { TextInput, View } from "react-native";
import style from "./Components.module.css";

type NumberInput = {
    placeholder: string;
    styles?: any;
    onChangeText?: any;
    maxLength?: number;
}
export default function NumberInput(props: NumberInput) {

  return (
    <View style={props.styles}>
      <TextInput style={style.textInput} keyboardType="number-pad" placeholder={props.placeholder} maxLength={props.maxLength || undefined} multiline={false} 
      onChangeText={num => props.onChangeText(num)}/>
      <View style={style.inputLine} />
    </View>
  );
}
