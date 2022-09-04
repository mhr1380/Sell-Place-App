import { StyleSheet, View } from "react-native";
const Screen = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    width: "100%",
  },
});
export default Screen;
