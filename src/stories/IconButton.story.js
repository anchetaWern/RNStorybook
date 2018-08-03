import React from "react";
import { View } from "react-native";
import IconButton from "../components/IconButton";
import { storiesOf } from "@storybook/react-native";

storiesOf("IconButton", module)
  .addDecorator(getStory => (
    <View style={{ flex: 1, alignItems: "center" }}>{getStory()}</View>
  ))
  .add("on", () => (
    <IconButton
      icon={"heart"}
      color={"#333"}
      onPress={() => console.log("clicked!")}
    />
  ))
  .add("off", () => (
    <IconButton
      icon={"heart-o"}
      color={"#333"}
      onPress={() => console.log("clicked!")}
    />
  ));
