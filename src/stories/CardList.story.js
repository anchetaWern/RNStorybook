import React from "react";
import { ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Provider from "../components/Provider";
import CardList from "../components/CardList";

storiesOf("CardList", module)
  .addDecorator(getStory => <Provider>{getStory()}</Provider>)
  .add("with cards", () => {
    return <CardList />;
  });


