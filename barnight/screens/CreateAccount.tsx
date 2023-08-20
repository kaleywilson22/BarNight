import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
} from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../styles/CreateAccount.module.css";
import { Header } from "../components/Components";

export default function CreateAccount({
  navigation,
}: RootStackScreenProps<"CreateAccount">) {
  return (
    <SafeAreaView style={style.safeview}>
      <Header subtitle="Create Account" />
      <View style={[style.child_container, { flex: " 2 2 0" }]}>
        <Pressable
          style={style.button}
          onPress={() => navigation.push("CreateWithPhone")}
        >
          <Text style={style.buttonText}>Phone Number</Text>
        </Pressable>
        <Text style={style.buttonText}>Or</Text>
        <Pressable style={style.button}>
          <Text
            style={style.buttonText}
            onPress={() => navigation.push("CreateWithEmail")}
          >
            Email
          </Text>
        </Pressable>
        <View style={[style.child_container, { paddingTop: 30 }]}>
          <Pressable
            onPress={() => navigation.navigate("LoginScreen")}
            style={[ 
              style.button1,
              {
                borderStyle: "solid",
                borderColor: "#fff",
                borderBottomWidth: 1,
                marginTop: 15
              },
            ]}
          >
            <Text style={[style.text, {textTransform: 'uppercase'}]}>go back</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}
