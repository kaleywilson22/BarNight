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
import TextInputWithLine from "../components/TextInput";
import style from "./LoginScreen.module.css";
import { RootStackScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"LoginScreen">) {
  return (
    <KeyboardAvoidingView behavior={"padding"} style={style.scrollarea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.safeview}>
          <View
            style={[
              style.child_container,
              { flex: "1 1 0", justifyContent: "center" },
            ]}
          >
            <Text style={style.logo}>Bar Night</Text>
            <Text style={style.logoSub}>MEET. DRINK. REPEAT.</Text>
          </View>
          <View style={[style.child_container, { flex: "2 2 0" }]}>
            <View style={[style.child_container, { marginTop: 20 }]}>
              <Text style={style.header2}>Login</Text>
              <TextInputWithLine placeholder="email or username" />
              <TextInputWithLine placeholder="password" />
            </View>
            <View style={[style.child_container, { marginTop: 0 }]}>
              <Pressable style={style.button}>
                <Text style={style.header1}>LOGIN</Text>
              </Pressable>
            </View>
            <View style={[style.child_container, { paddingTop: 30 }]}>
              <Pressable
                onPress={() => navigation.replace("CreateAccount")}
                style={[
                  {
                    borderStyle: "solid",
                    borderColor: "#fff",
                    borderBottomWidth: 1,
                  },
                  style.button1,
                ]}
              >
                <Text style={style.text}>CREATE ACCOUNT</Text>
              </Pressable>
            </View>
          </View>
          <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
