import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Color from "../config/Color";
import React from "react";

const DetailListingScreen = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.subtitle}>$100</Text>
      </View>
      <View style={styles.listings}>
        <TouchableOpacity>
          <View style={styles.listing}>
            <Image
              style={styles.listingImage}
              source={require("../assets/profile_picture.jpg")}
            />
            <View style={styles.listingItemDetail}>
              <Text style={styles.listingItemTitle}>Red jacket for sale!</Text>
              <Text style={styles.listingItemSubtitle}>$100</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%", backgroundColor: "#fff" },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 7,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 20,
    color: Color.secondary,
  },
  listing: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#fff",
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
export default DetailListingScreen;
