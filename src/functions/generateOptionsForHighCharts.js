import { filterArray } from "./filterArray";
import { aggregate } from "./aggregate";
import { generateTitleForHighCharts } from "./generateTitleForHighCharts";
import { generateDataSetForHighCharts } from "./generateDataSetForHighCharts";

export function generateOptionsForHighCharts(data, filter, apply) {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  if (apply) {
    return generateDataSetForHighCharts(
      aggregate(filterArray(filter, data)).impressions,
      aggregate(filterArray(filter, data)).clicks,
      generateTitleForHighCharts(filter)
    );
  } else {
    return generateDataSetForHighCharts(
      aggregate(data).impressions,
      aggregate(data).clicks,
      "All Datasources; All Campaigns"
    );
  }
}
