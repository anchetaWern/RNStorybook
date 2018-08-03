import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";

configure(() => {
	loadStories();
}, module);

const StorybookUI = getStorybookUI({
	port: 7007,
	host: "localhost",
	onDeviceUI: true,
	resetStorybook: true
});

AppRegistry.registerComponent("RNStorybook", () => StorybookUI);

export { StorybookUI as default };
