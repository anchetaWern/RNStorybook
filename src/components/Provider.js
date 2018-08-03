import React from "react";
import { ScrollView } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

import PropTypes from "prop-types";

const store = createStore(reducers);

const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </ReduxProvider>
  );
};

const styles = {
  content: {
    alignItems: "center"
  }
};

Provider.propTypes = {
  children: PropTypes.element.isRequired
};

export default Provider;
