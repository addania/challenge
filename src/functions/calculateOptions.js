import { filterArray } from "./filterArray";
import { calculateAggregates } from "./calculateAggregates";
import { generateMessage } from "./generateMessage";
import { generateOptions } from "./generateOptions";

export const calculateOptions = (data, filter, apply) => {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  if (apply) {
    const arrayAfterFiltering = filterArray(filter, data);
    const aggregatedData = calculateAggregates(arrayAfterFiltering);
    const aggregatedImpressions = aggregatedData[0];
    const aggregatedClicks = aggregatedData[1];
    const aggregatedDates = aggregatedData[2];
    const message = generateMessage(filter);
    const optionsFilteredData = generateOptions(
      aggregatedImpressions,
      aggregatedClicks,
      aggregatedDates,
      message
    );
    return optionsFilteredData;
  } else {
    const aggregatedData = calculateAggregates(data);
    const aggregatedImpressions = aggregatedData[0];
    const aggregatedClicks = aggregatedData[1];
    const aggregatedDates = aggregatedData[2];
    const message = "All Datasources; All Campaigns";
    const optionsFilteredData = generateOptions(
      aggregatedImpressions,
      aggregatedClicks,
      aggregatedDates,
      message
    );
    return optionsFilteredData;
  }
};
