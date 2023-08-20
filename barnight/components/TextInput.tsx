import React from "react";
import { TextInput, View } from "react-native";
import style from "./Components.module.css";

type TextInputProps = {
    placeholder: string;
    styles?: any;
    onChangeText?: any;
}
export default function TextInputWithLine(props: TextInputProps) {
  return (
    <View style={[props.styles]}>
      <TextInput style={style.textInput} placeholder={props.placeholder} autoCapitalize='none' onChangeText={text => props.onChangeText(text)}/>
      <View style={style.inputLine} />
    </View>
  );
}
