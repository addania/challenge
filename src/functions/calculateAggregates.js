import _ from "lodash";

export const calculateAggregates = array => {
  // Receives an array of data as input and outputs an array of data aggregated per date.
  // First element of the output array is array of aggregated impressions.
  // Second element of the output array is array of aggregated clicks.
  // Third element of the output array is array of unique dates.
  const groupByDate = _.groupBy(array, "Date");
  const uniqueDates = Object.keys(groupByDate);
  const impressions = uniqueDates.map(item => {
    const sumImp = groupByDate[item].reduce((acc, obj) => {
      return acc + obj.Impressions;
    }, 0);
    return [parseInt(item), sumImp];
  });
  const clicks = uniqueDates.map(item => {
    const sumClick = groupByDate[item].reduce((acc, obj) => {
      return acc + obj.Clicks;
    }, 0);
    return [parseInt(item), sumClick];
  });
  return { impressions: impressions, clicks: clicks };
};
