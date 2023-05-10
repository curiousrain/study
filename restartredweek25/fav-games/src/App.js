import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Games", "Hours"],
  ["Stardew Valley", 176],
  ["Persona 3", 110],
  ["Hi-Fi Rush", 20.5],
  ["Divinity: Original Sin", 45],
  ["League of Legends", 1000],
];

export const options = {
  title: "How much time I spent on video games",
};
export default function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
