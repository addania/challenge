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
        const sumImp = groupByDate[item].reduce((acc, obj) => {
          return acc + obj.Impressions;
        }, 0);
        return [parseInt(item), sumImp];
      })
    },
    clicks: {
      type: "line",
      name: "Clicks",
      data: Object.keys(groupByDate).map(item => {
        const sumClick = groupByDate[item].reduce((acc, obj) => {
          return acc + obj.Clicks;
        }, 0);
        return [parseInt(item), sumClick];
      })
    }
  };
};
