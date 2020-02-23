import _ from "lodash";
import Highcharts from "highcharts";

export const generateChartOptions = (data, filter, apply) => {
  // As input receives data, filter and condition whether to apply filter or not.
  // Outputs options for HighchartsReact to display either filtered data or entire data set.
  if (apply) {
    return getChartData(
      aggregate(filterArray(filter, data)).impressions,
      aggregate(filterArray(filter, data)).clicks,
      getChartTitle(filter)
    );
  } else {
    return getChartData(
      aggregate(data).impressions,
      aggregate(data).clicks,
      "All Datasources; All Campaigns"
    );
  }
};

export const filterArray = (filter, data) => {
  // Receives data for filtering and filters in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  if (!(Object.entries(filter).length === 0 && filter.constructor === Object)) {
    if (filter.datasource === undefined || filter.datasource.length === 0) {
      return data.filter(item => filter.campaign.includes(item.campaign));
    } else if (filter.campaign === undefined || filter.campaign.length === 0) {
      return data.filter(item => filter.datasource.includes(item.datasource));
    } else {
      return data.filter(
        item =>
          filter.datasource.includes(item.datasource) &&
          filter.campaign.includes(item.campaign)
      );
    }
  }
};

export const aggregate = array => {
  // Receives an array of data as input and outputs an object of data aggregated per date.
  // First key is data series for Highcharts of aggregated impressions.
  // Second key is data series for Highcharts of aggregated clicks.
  const groupByDate = _.groupBy(array, "date");
  return {
    impressions: {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: generateChartAggregates(groupByDate, "impressions")
    },
    clicks: {
      type: "line",
      name: "Clicks",
      data: generateChartAggregates(groupByDate, "clicks")
    }
  };
};

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

export const getChartTitle = filter => {
  // Receives filter as input and generates corresponding message
  if (filter["campaign"] === undefined && filter["datasource"] !== undefined) {
    return "Datasource " + getTitleList(filter.datasource) + "; All Campaigns";
  } else if (
    filter["datasource"] === undefined &&
    filter["campaign"] !== undefined
  ) {
    return "All Datasources; Campaign " + getTitleList(filter.campaign);
  } else if (
    filter["campaign"] === undefined &&
    filter["datasource"] === undefined
  ) {
    return "All Datasources; All Campaigns";
  } else {
    return (
      "Datasource " +
      getTitleList(filter.datasource) +
      "; Campaign " +
      getTitleList(filter.campaign)
    );
  }
};

export const getTitleList = filterItem => {
  // Receives an array of filter values. Generates a string of maximum 3 values
  // if multiple filter values are selected.
  const valuesArray = filterItem
    .slice(0, 3)
    .map(item => JSON.stringify(item) + " and ");
  if (filterItem.length <= 3) {
    return valuesArray.join("").slice(0, -4);
  } else {
    return valuesArray.join("").slice(0, -5) + ", etc.";
  }
};

export const getChartData = (impressions, clicks, title) =>
  // Recives series of impressions, series of clicks and title message for Highcharts as input.
  // Outputs options to visualize data on a HighchartsReact component.
  ({
    chart: {
      type: "spline",
      zoomType: "x"
    },
    title: {
      text: title,
      align: "left"
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        day: "%e. %b"
      }
    },
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}",
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        title: {
          text: "Clicks",
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: false
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: "Impressions",
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
          format: "{value}",
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        opposite: true
      }
    ],
    legend: {
      enabled: true
    },
    series: [clicks, impressions]
  });
