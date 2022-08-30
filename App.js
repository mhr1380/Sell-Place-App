import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import MyButton from "./app/components/MyButton";

import Card from "./app/components/Card";
import CardItemsScreen from "./app/screens/CardItemsScreen";
import DetailListingScreen from "./app/screens/DetailListingScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <DetailListingScreen image={require("./app/assets/jacket.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
