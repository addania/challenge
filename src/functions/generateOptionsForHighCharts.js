import { filterArray } from "./filterArray";
import { calculateAggregates } from "./calculateAggregates";
import { generateTitleForHighCharts } from "./generateTitleForHighCharts";
import { generateDataSetForHighCharts } from "./generateDataSetForHighCharts";

export function generateOptionsForHighCharts(data, filter, apply) {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  if (apply) {
    const aggregatedData = calculateAggregates(filterArray(filter, data));
    return generateDataSetForHighCharts(
      aggregatedData.impressions,
      aggregatedData.clicks,
      generateTitleForHighCharts(filter)
    );
  } else {
    const aggregatedData = calculateAggregates(data);
    return generateDataSetForHighCharts(
      aggregatedData.impressions,
      aggregatedData.clicks,
      "All Datasources; All Campaigns"
    );
  }
}
