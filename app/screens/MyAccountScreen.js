import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../config/Color";
import ListItem from "../components/ListItem";

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <ListItem
        style={{ marginBottom: 40 }}
        backgroundColor="#fff"
        title="MohammadHossein Rahimi"
        subtitle="mhr_2001@outlook.com"
        image={require("../assets/profile_picture.jpg")}
      />
      <ListItem
        style={{ borderBottomWidth: 0.5, borderBottomColor: "#a9a9a9" }}
        backgroundColor={"#fff"}
        title="My Listings"
        icon="format-list-bulleted"
        iconBackgroundColor={Color.primary}
      />
      <ListItem
        style={{ marginBottom: 20 }}
        backgroundColor="#fff"
        title="My Messages"
        icon="email"
        iconBackgroundColor={Color.secondary}
      />
      <ListItem
        style={{ marginBottom: 20 }}
        backgroundColor="#fff"
        title="Logout"
        icon="logout"
        iconBackgroundColor="#ffe66d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grey,
    paddingTop: 60,
  },
});
export default MyAccountScreen;
