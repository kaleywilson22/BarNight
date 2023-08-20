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
import { Header, TextInput } from "../components/Components";
import { useState } from "react";

export default function CreateWithEmail({
  navigation,
}: RootStackScreenProps<"CreateWithEmail">) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState("");

  function sendCode() {
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setIsEmailValid(true);
      navigation.push("VerifyAccount", { accountType: "email" });
    } else {
      setIsEmailValid(false);
      return;
    }
  }

  return (
    <SafeAreaView style={style.safeview}>
      <Header subtitle="Create Account" />
      <View style={[style.child_container, { flex: "2 2 0" }]}>
        <Text style={style.header1}>Enter Your Email:</Text>
        <TextInput
          styles={{ alignSelf: "center" }}
          placeholder="example@gmail.com"
          onChangeText={(val: string) => setEmail(val)}
        />
        {!isEmailValid ? <Text style={style.error}>Invalid Email</Text> : null}

        <Pressable style={style.button} onPress={() => sendCode()}>
          <Text style={style.buttonText}>Send Code</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[ 
            style.button1,
            {
              borderStyle: "solid",
              borderColor: "#fff",
              borderBottomWidth: 1,
              marginTop: 15
            }
          ]}
        >
          <Text style={[style.text, {textTransform: 'uppercase'}]}>go back</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}
