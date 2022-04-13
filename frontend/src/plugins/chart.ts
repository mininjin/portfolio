import { Chart, ChartConfiguration, registerables } from "chart.js";
import { options } from "@/constants/chart";
import { SkillElement } from "@/@types/schema";

Chart.register(...registerables);

export const setChart = (
  canvas: HTMLCanvasElement,
  skillElement: SkillElement
) => {
  const ctx = canvas.getContext("2d");
  const data = skillElement.chart.map((v) => v.value);
  const labels = skillElement.chart.map((v) => v.name);
  const config: ChartConfiguration<"radar"> = {
    type: "radar",
    data: {
      labels,
      datasets: [{ data }],
    },
    options: {
      ...options,
      borderColor: skillElement.color,
      backgroundColor: skillElement.color + "80",
    },
  };
  return ctx ? new Chart(ctx, config) : undefined;
};
