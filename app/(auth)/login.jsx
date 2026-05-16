import {
  StyleSheet,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/colors";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedLogo from "../../components/ThemedLogo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Login form submitted!", email, password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedLogo />

        <Spacer></Spacer>
        <ThemedText title={true} style={styles.title}>
          Access your Shelfie!
        </ThemedText>

        {/* <Pressable 
        onPress={handleSubmit}
        style={({pressed}) => [styles.btn, pressed && styles.pressed]}>
            <Text style={{color: '#f2f2f2'}}>Login</Text>
        </Pressable> */}

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          keyboardType="default"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>

        <Spacer height={100} />
        <Link href="/register">
          <ThemedText style={{ textAlign: "center" }}>
            First time user?
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },

  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 1.01 }],
  },
});
