import { filterArray } from "./filterArray";
import { aggregate } from "./aggregate";
import { getChartTitle } from "./getChartTitle";
import { getChartData } from "./getChartData";

export function generateChartOptions(data, filter, apply) {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  if (apply) {
    return getChartData(
      aggregate(filterArray(filter, data)).impressions,
      aggregate(filterArray(filter, data)).clicks,
      getChartTitle(filter)
    );
  } else {
    return getChartData(
      aggregate(data).impressions,
      aggregate(data).clicks,
      "All Datasources; All Campaigns"
    );
  }
}
