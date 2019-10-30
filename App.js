import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Portfolio from "./screens/Portfolio";
import Settings from "./screens/Settings";

const TabNavigator = createBottomTabNavigator({
  Portfolio: Portfolio,
  Settings: Settings
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
