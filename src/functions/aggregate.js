import _ from "lodash";
import { generateChartAggregates } from "./generateChartAggregates";

export const aggregate = array => {
  // Receives an array of data as input and outputs an object of data aggregated per date.
  // First key is data series for Highcharts of aggregated impressions.
  // Second key is data series for Highcharts of aggregated clicks.
  const groupByDate = _.groupBy(array, "date");
  return {
    impressions: {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: generateChartAggregates(groupByDate, "impressions")
    },
    clicks: {
      type: "line",
      name: "Clicks",
      data: generateChartAggregates(groupByDate, "clicks")
    }
  };
};
