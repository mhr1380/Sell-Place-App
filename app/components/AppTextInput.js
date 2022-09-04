import { View, StyleSheet, TextInput, Platform, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../config/Color";

const AppTextInput = ({ icon, error, touched, ...otherProps }) => {
  // const checkError = error && touched ? true : false;
  return (
    <View>
      <View style={[styles.container, { marginBottom: !error ? 15 : 5 }]}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={25} color={Color.medium} />
        )}
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.grey,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    marginBottom: 5,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
    color: Color.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  error: {
    color: "red",
    fontSize: 15,
    marginBottom: 10,
  },
});
export default AppTextInput;
