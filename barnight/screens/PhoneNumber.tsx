import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";

import style from "./LoginScreen.module.css";
import { RootStackScreenProps } from "../types";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function CreateWithPhone({
  navigation
}: RootStackScreenProps<"CreateWithPhone">) {
  const [isNumValid, setIsNumValid] = useState(false);
  const [number, setNumber] = useState('')

  function sendCode() {
    if(number.length < 10){
      setIsNumValid(true);
      return;
    }else{
      navigation.push("VerifyAccount", {accountType: "phone"})
    }
  }
  
  return (
    <SafeAreaView style={style.safeview}>
      <View style={[style.child_container]}>
        <Text style={style.header1}>Enter Your Phone Number:</Text>
        <NumberInput
          styles={{ alignSelf: "center" }}
          placeholder="1234567890" 
          onChangeText = {(val: string) => (setNumber(val))}
          maxLength={10}
        />
        {isNumValid ? <Text style={style.error}>Invalid Phone Number</Text> : null
        }
        
        <Pressable style={style.button} onPress={() => sendCode()}>
          <Text style={style.buttonText}>Send Code</Text>
        </Pressable>
      </View>
      <View style={[style.child_container, { paddingTop: 30 }]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[
            {
              borderStyle: "solid",
              borderColor: "#fff",
              borderBottomWidth: 1,
            },
            style.button1,
          ]}
        >
          <Text style={style.text}>go back</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}
