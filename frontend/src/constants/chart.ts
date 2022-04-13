import { ChartOptions } from "chart.js";
import { CHART_RANGE } from "./application";

export const options: ChartOptions<"radar"> = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      ...CHART_RANGE,
      pointLabels: {
        font: { size: 18, family: "'Grape Nuts', cursive" },
      },
      ticks: {
        stepSize: 1,
      },
    },
  },
};
