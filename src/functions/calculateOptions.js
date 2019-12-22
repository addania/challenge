import { filterArray } from "./filterArray";
import { calculateAggregates } from "./calculateAggregates";
import { generateMessage } from "./generateMessage";
import { generateOptions } from "./generateOptions";

export const calculateOptions = (data, filter, apply) => {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
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
  return optionsFilteredData;
};
