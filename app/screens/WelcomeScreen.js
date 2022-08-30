import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import MyButton from "../components/MyButton";
import Colors from "../config/Color";
export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={{ fontSize: 20 }}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          title="Login"
          backgroundColor={Colors.primary}
          color="white"
        />
        <MyButton
          title="Register"
          backgroundColor={Colors.secondary}
          color="white"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    // width: 120,
    // height: 120,
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    height: 110,
    width: "80%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
