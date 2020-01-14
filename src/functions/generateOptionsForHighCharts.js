import { filterArray } from "./filterArray";
import { calculateAggregates } from "./calculateAggregates";
import { generateTitleForHighCharts } from "./generateTitleForHighCharts";
import { generateDataSetForHighCharts } from "./generateDataSetForHighCharts";

export function generateOptionsForHighCharts(data, filter, apply) {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  let message = "";
  let aggregatedData;
  if (apply) {
    aggregatedData = calculateAggregates(filterArray(filter, data));
    message = generateTitleForHighCharts(filter);
  } else {
    aggregatedData = calculateAggregates(data);
    message = "All Datasources; All Campaigns";
  }
  return generateDataSetForHighCharts(
    aggregatedData.impressions,
    aggregatedData.clicks,
    aggregatedData.dates,
    message
  );
}
