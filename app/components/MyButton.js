import {
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
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
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
