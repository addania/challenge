import _ from "lodash";

export const calculateAggregates = array => {
  // Receives an array of data as input and outputs an array of data aggregated per date.
  // First element of the output array is array of aggregated impressions.
  // Second element of the output array is array of aggregated clicks.
  // Third element of the output array is array of unique dates.
  const groupByDate = _.groupBy(array, "Date");
  const uniqueDates = _.keys(groupByDate);
  let impressionsArray = [];
  let clicksArray = [];

  for (let dayEntry = 0; dayEntry < uniqueDates.length; dayEntry++) {
    let totalImpressions = 0;
    let totalClicks = 0;

    for (
      let dataRow = 0;
      dataRow < groupByDate[uniqueDates[dayEntry]].length;
      dataRow++
    ) {
      totalImpressions =
        totalImpressions +
        groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
      totalClicks =
        totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
    }
    impressionsArray.push(totalImpressions);
    clicksArray.push(totalClicks);
  }
  return [impressionsArray, clicksArray, uniqueDates];
};
