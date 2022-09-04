import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import MyButton from "./app/components/MyButton";
import Card from "./app/components/Card";
import CardItemsScreen from "./app/screens/CardItemsScreen";
import DetailListingScreen from "./app/screens/DetailListingScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Color from "./app/config/Color";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
// import * as yup from "yup";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
