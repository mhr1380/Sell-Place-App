import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../config/Color";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  category,
  title,
  items,
  setCategory,
  ...otherProps
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={Color.medium}
            />
          )}
          <Text style={styles.textInput} {...otherProps}>
            {category ? category : "Select Category"}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={Color.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Button title="Close" onPress={() => setShowModal(false)} />
        <FlatList
          data={items}
          keyExtractor={(category) => category.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={(item) => {
                setCategory(item);
                setShowModal(false);
              }}
            />
          )}
        />
      </Modal>
    </>
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
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
    color: Color.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex: 1,
  },
});
export default AppPicker;
