export const generateChartAggregates = (groupByDate, metric) =>
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  Object.keys(groupByDate).map(item => {
    const sum = groupByDate[item].reduce(
      (accumulator, object) => accumulator + object[metric],
      0
    );
    return [parseInt(item), sum];
  });
