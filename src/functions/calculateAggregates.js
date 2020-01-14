import _ from "lodash";

export function calculateAggregates(array) {
  // Receives an array of data as input and outputs an array of data aggregated per date.
  // First element of the output array is array of aggregated impressions.
  // Second element of the output array is array of aggregated clicks.
  // Third element of the output array is array of unique dates.
  let groupByDate = _.groupBy(array, "Date");
  let uniqueDates = _.keys(groupByDate);
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
  return {
    impressions: impressionsArray,
    clicks: clicksArray,
    dates: uniqueDates
  };
}
