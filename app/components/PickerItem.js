import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(label);
      }}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: { padding: 20 },
});
export default PickerItem;
