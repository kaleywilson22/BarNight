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

type VerfiyProps = {
    accountType: string
}
export default function VerifyAccount({route, navigation}: RootStackScreenProps<'VerifyAccount'>) {
    const {accountType} = route.params;
    const [code, setCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    return (
        <SafeAreaView style={style.safeview}>
            <Text style={[style.header1, {fontSize: 20}]}>Enter code sent to your {accountType}:</Text>
            <NumberInput
          styles={{ alignSelf: "center" }}
          placeholder="0000" 
          onChangeText = {(val: string) => (setCode(val))}
          maxLength={4}
        />
        {isVerified ? <Text style={style.error}>Invalid Phone Number</Text> : null
        }
        
        <Pressable style={style.button} onPress={() => navigation.push}>
          <Text style={style.buttonText}>Verifiy</Text>
        </Pressable>
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
        </SafeAreaView>
    )
}