export type IApexChartTypes =
  | "line"
  | "area"
  | "bar"
  | "histogram"
  | "pie"
  | "donut"
  | "rangeBar"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "radar"
  | "polarArea";

export type IApexChartSeries = {
  name: string;
  type?: string;
  data: (number | null)[][];
}[];
