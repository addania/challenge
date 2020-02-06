export const generateChartAggregates = (groupByDate, metric) =>
  // As input receives dataset grouped by day and name of metric.
  // Outputs array of unique dates and aggregated data of that metric.
  Object.keys(groupByDate).map(item => {
    const sum = groupByDate[item].reduce(
      (accumulator, object) => accumulator + object[metric],
      0
    );
    return [parseInt(item), sum];
  });
