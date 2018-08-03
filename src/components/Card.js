import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import IconButton from "./IconButton";

const { width, height } = Dimensions.get("window");

const Card = ({ image, text, is_favorite, action }) => {
  const icon = is_favorite ? "heart" : "heart-o";
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode={"contain"} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <IconButton icon={icon} color={"#333"} onPress={action} />
    </View>
  );
};

const styles = {
  container: {
    width: width - 40,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: width - 100
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
};

Card.propTypes = {
  image: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired
};

export default Card;
