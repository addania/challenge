import _ from "lodash";

export const aggregate = array => {
  // Receives an array of data as input and outputs an object of data aggregated per date.
  // First key is data series for Highcharts of aggregated impressions.
  // Second key is data series for Highcharts of aggregated clicks.
  const groupByDate = _.groupBy(array, "Date");
  return {
    impressions: {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: Object.keys(groupByDate).map(item => {
        const sumImpressions = groupByDate[item].reduce(
          (accumulator, object) => {
            return accumulator + object.Impressions;
          },
          0
        );
        return [parseInt(item), sumImpressions];
      })
    },
    clicks: {
      type: "line",
      name: "Clicks",
      data: Object.keys(groupByDate).map(item => {
        const sumClicks = groupByDate[item].reduce((accumulator, object) => {
          return accumulator + object.Clicks;
        }, 0);
        return [parseInt(item), sumClicks];
      })
    }
  };
};
