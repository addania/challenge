import { filterArray } from "./filterArray";
import { calculateAggregates } from "./calculateAggregates";
import { generateMessage } from "./generateMessage";
import { generateOptions } from "./generateOptions";

export function calculateOptions(data, filter, apply) {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  console.log("data", data);
  console.log("filter", filter);
  console.log("apply", apply);
  let aggregatedImpressions;
  let aggregatedClicks;
  let aggregatedDates;
  let message = "";
  if (apply) {
    const arrayAfterFiltering = filterArray(filter, data);
    const aggregatedData = calculateAggregates(arrayAfterFiltering);
    aggregatedImpressions = aggregatedData[0];
    aggregatedClicks = aggregatedData[1];
    aggregatedDates = aggregatedData[2];
    message = generateMessage(filter);
  } else {
    const aggregatedData = calculateAggregates(data);
    aggregatedImpressions = aggregatedData[0];
    aggregatedClicks = aggregatedData[1];
    aggregatedDates = aggregatedData[2];
    message = "All Datasources; All Campaigns";
  }
  const optionsFilteredData = generateOptions(
    aggregatedImpressions,
    aggregatedClicks,
    aggregatedDates,
    message
  );
  console.log("optionsFilteredData", optionsFilteredData);
  return optionsFilteredData;
}
