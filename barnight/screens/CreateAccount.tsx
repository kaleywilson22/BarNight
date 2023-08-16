import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../styles/CreateAccount.module.css";

export default function CreateAccount({
  navigation,
}: RootStackScreenProps<"CreateAccount">) {
  return (
    <SafeAreaView style={style.safeview}>
      <View
        style={[
          style.child_container,
          { flex: "1 1 0", justifyContent: "center" },
        ]}
      >
        <Text style={style.logo}>Bar Night</Text>
        <Text style={style.buttonText}>Create Account.</Text>
      </View>
      <View style={[style.child_container, { flex: " 2 2 0" }]}>
        <Pressable style={style.button} onPress={()=> navigation.push("CreateWithPhone")}>
          <Text style={style.buttonText}>Phone Number</Text>
        </Pressable>
        <Text style={style.buttonText}>Or</Text>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Email</Text>
        </Pressable>
        <View style={[style.child_container, { paddingTop: 30}]}>
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
            <Text style={style.text}>GO BACK</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}
