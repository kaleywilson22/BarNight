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
import { Header, NumberInput } from "../components/Components";

import style from "./LoginScreen.module.css";
import { RootStackScreenProps } from "../types";
import { useState } from "react";

type VerfiyProps = {
  accountType: string;
};
export default function VerifyAccount({
  route,
  navigation,
}: RootStackScreenProps<"VerifyAccount">) {
  const { accountType } = route.params;
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  return (
    <SafeAreaView style={style.safeview}>
      <Header subtitle="Create Account" />
      <View
        style={[
          style.child_container,
          {  borderColor: "white", borderWidth: "1px" },
        ]}
      >
        <Text style={[style.header1, { fontSize: 20, textAlign: "center" }]}>
          Enter code sent {"\n"} to your {accountType}:
        </Text>
        {/* <NumberInput
          styles={{ alignSelf: "center" }}
          placeholder="0000"
          onChangeText={(val: string) => setCode(val)}
          maxLength={4}
        />
        {isVerified ? (
          <Text style={style.error}>Invalid Phone Number</Text>
        ) : null}

        <Pressable style={style.button} onPress={() => navigation.push}>
          <Text style={style.buttonText}>Verify</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[
            style.button1,
            {
              borderStyle: "solid",
              borderColor: "#fff",
              borderBottomWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text style={[style.text, { textTransform: "uppercase" }]}>
            go back
          </Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
}
