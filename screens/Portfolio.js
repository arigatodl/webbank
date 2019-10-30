import React from "react";
import { View, Text } from "react-native";
import { StackedAreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

const data = [
  {
    month: new Date(2015, 0, 1),
    apples: 3840,
    bananas: 1920
  },
  {
    month: new Date(2015, 1, 1),
    apples: 1600,
    bananas: 1440
  },
  {
    month: new Date(2015, 2, 1),
    apples: 640,
    bananas: 960
  },
  {
    month: new Date(2015, 3, 1),
    apples: 3320,
    bananas: 480
  }
];

const colors = ["#8800cc", "#aa00ff"];
const keys = ["apples", "bananas"];
const svgs = [
  { onPress: () => console.log("apples") },
  { onPress: () => console.log("bananas") }
];

export default class Portfolio extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Balance: $9293</Text>
        </View>
        <StackedAreaChart
          style={{
            flex: 1,
            height: 100,
            width: "100%"
          }}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
          showGrid={false}
          svgs={svgs}
        />
      </View>
    );
  }
}
