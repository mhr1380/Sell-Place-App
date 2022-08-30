import {
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";
const MyButton = ({ onPress, title, backgroundColor, color }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 50,
      backgroundColor: backgroundColor,
      color: color,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
    },
    text: {
      fontSize: 18,
      color: color,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MyButton;
