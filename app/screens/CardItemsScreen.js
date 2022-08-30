import { StyleSheet, View } from "react-native";
import Card from "../components/Card";
const CardItemsScreen = () => {
  return (
    <View style={styles.cardContainer}>
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require("../assets/jacket.jpg")}
      />
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
  },
});
export default CardItemsScreen;
