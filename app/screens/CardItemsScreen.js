import { FlatList, StyleSheet, View, ScrollView } from "react-native";
import Card from "../components/Card";
const CardItemsScreen = () => {
  const DATA = [
    { title: "t1", description: "d1", id: 1 },
    { title: "t2", description: "d2", id: 2 },
    { title: "t3", description: "d3", id: 3 },
    { title: "t4", description: "d4", id: 4 },
  ];
  const renderItem = ({ item }) => {
    return (
      <Card
        title={item.title}
        subtitle={item.description}
        image={require("../assets/jacket.jpg")}
      />
    );
  };
  return (
    <ScrollView
      style={{ width: "100%", marginTop: 50 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.cardContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
  },
});
export default CardItemsScreen;
