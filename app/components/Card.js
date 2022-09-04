import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Color from "../config/Color";
const Card = ({ title, subtitle, image }) => {
  return (
    <TouchableOpacity delayLongPress={50} onPress={() => {}}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    // height: 200,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  detailsContainer: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 17,
    marginBottom: 7,
  },
  subtitle: {
    color: Color.secondary,
  },
  image: {
    width: "100%",
    height: 150,
  },
});
export default Card;
