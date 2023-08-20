import React from "react";
import { Text, View } from "react-native";
import style from "./Components.module.css";

type HeaderProps = {
  subtitle: string;
  styles?: any;
};
export default function Header(props: HeaderProps) {
  return (
    <View
      style={[
        style.child_container,
        { flex: "1 1 0", justifyContent: "center" },
      ]}
    >
      <Text style={style.logo}>Bar Night</Text>
      <Text style={style.logoSub} >{props.subtitle}</Text>
    </View>
  );
}
