import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name={icon} size={30} color={color} />
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    alignSelf: "center",
    marginTop: 10
  }
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default IconButton;
