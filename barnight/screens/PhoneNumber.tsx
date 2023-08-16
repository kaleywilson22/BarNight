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

export default function CreateWithPhone({
  navigation
}: RootStackScreenProps<"CreateWithPhone">) {
  var num_short = false;

  function sendCode(num: string) {
    if(num.length < 10){
      num_short = true;
    }
  }
  return (
    <SafeAreaView style={style.safeview}>
      <View style={[style.child_container]}>
        <Text style={style.header1}>Enter Your Phone Number:</Text>
        <NumberInput
          styles={{ alignSelf: "center" }}
          placeholder="1234567890" 
        />
        {num_short? <Text style={style.header1}>phone</Text> : null
        }
        
        <Pressable style={style.button} onPress={() => navigation.push("VerifyAccount", {accountType: "phone"})}>
          <Text style={style.header1}>Send Code</Text>
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
