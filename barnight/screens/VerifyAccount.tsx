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

type VerfiyProps = {
    accountType: string
}
export default function VerifyAccount({route, navigation}: RootStackScreenProps<'VerifyAccount'>) {
    const {accountType} = route.params;
    return (
        <SafeAreaView style={style.safeview}>
            <Text>Enter Code sent to your {accountType}</Text>
        </SafeAreaView>
    )
}