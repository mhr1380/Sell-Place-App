import { StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../config/Color";
const ListItem = ({
  backgroundColor,
  title,
  subtitle,
  icon,
  image,
  style,
  iconBackgroundColor = Color.primary,
}) => {
  const styles = StyleSheet.create({
    listing: {
      width: "100%",
      // height: 100,
      padding: 15,
      flexDirection: "row",
      backgroundColor: backgroundColor,
      alignItems: "center",
    },
    listingImage: {
      width: 75,
      height: 75,
      borderRadius: 50,
      overflow: "hidden",
    },
    listingItemTitle: {
      fontSize: 17,
    },
    listings: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      padding: 20,
    },
    listingItemDetail: {
      backgroundColor: "#fff",
      padding: 10,
    },
    listingItemSubtitle: {
      color: "#c6c6c6",
    },
  });
  return (
    <View style={[styles.listing, style]}>
      {image && <Image style={styles.listingImage} source={image} />}
      {icon && (
        <View
          style={{
            backgroundColor: iconBackgroundColor,
            padding: 10,
            borderRadius: 30,
          }}
        >
          <MaterialCommunityIcons size={30} name={icon} color="white" />
        </View>
      )}
      <View style={styles.listingItemDetail}>
        <Text style={styles.listingItemTitle}>{title}</Text>
        {subtitle && <Text style={styles.listingItemSubtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
};

export default ListItem;
