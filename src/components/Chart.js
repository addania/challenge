import React from "react";
import _ from "lodash";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export function Chart({ coreData, filters, applyFilters, onClick, styling }) {
  // Defines a visualization components which will render a HighchartsReact component
  // based on options generated from data and filters
  let calculatedOptions = calculateOptions(coreData, filters, applyFilters);

  return (
    <div>
      <Row>
        <Col sm={10}>
          <h2 style={styling}>Chart</h2>
        </Col>
        <Col sm={2}>
          <button
            type="submit"
            style={{
              backgroundColor: "#8DA1B9",
              color: "white",
              borderRadius: "2px",
              width: "80px",
              padding: "5px 0px",
              marginTop: "10px",
              position: "absolute",
              right: 0,
              bottom: 0
            }}
          >
            <span onClick={onClick}>Reset</span>
          </button>
        </Col>
      </Row>
      <HighchartsReact highcharts={Highcharts} options={calculatedOptions} />
    </div>
  );
}

function calculateOptions(data, filter, apply) {
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
}

function filterArray(filtering, dataForFiltering) {
  // Receives data for filtering and filters in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  const filteredDatasources = filtering.Datasource;
  const filteredCampaigns = filtering.Campaign;
  let filteredArray = [];
  if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    ) &&
    (filteredDatasources === undefined || filteredDatasources.length == 0)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      return filteredCampaigns.includes(i.Campaign);
    });
  } else if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    ) &&
    (filteredCampaigns === undefined || filteredCampaigns.length == 0)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      return filteredDatasources.includes(i.Datasource);
    });
  } else if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    )
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      return (
        filteredDatasources.includes(i.Datasource) &&
        filteredCampaigns.includes(i.Campaign)
      );
    });
  }
  return filteredArray;
}

function calculateAggregates(array) {
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
  return [impressionsArray, clicksArray, uniqueDates];
}

function generateOptions(
  impressionsForOptions,
  clicksForOptions,
  datesForOptions,
  messageForOptions
) {
  // Recives array of impressions, array of clicks and array of unique dates as input.
  // Outputs options to visualize data on a HighchartsReact component.
  const options = {
    chart: {
      type: "spline"
    },
    xAxis: {
      categories: datesForOptions
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

    title: {
      text: messageForOptions,
      align: "left"
    },
    series: [
      {
        name: "Clicks",

        data: clicksForOptions
      },

      {
        name: "Impressions",
        yAxis: 1,

        data: impressionsForOptions
      }
    ]
  };
  return options;
}

function generateMessage(filterForMessage) {
  // Receives filter as input and generates corresponding message
  let filterMessage = "";
  let datasourceMessage = "";
  let campaignMessage = "";
  console.log("FilterForMessage");
  if (
    filterForMessage["Campaign"] == undefined &&
    filterForMessage["Datasource"] != undefined
  ) {
    campaignMessage = "All Campaigns";
    let datasourcesList = generateList(filterForMessage.Datasource);
    datasourceMessage = "Datasource " + datasourcesList;
  } else if (
    filterForMessage["Datasource"] == undefined &&
    filterForMessage["Campaign"] != undefined
  ) {
    datasourceMessage = "All Datasources";
    let campaignsList = generateList(filterForMessage.Campaign);
    campaignMessage = "Campaign " + campaignsList;
  } else if (
    filterForMessage["Campaign"] == undefined &&
    filterForMessage["Datasource"] == undefined
  ) {
    datasourceMessage = "All Datasources ";
    campaignMessage = "All Campaigns";
  } else {
    let datasourcesList = generateList(filterForMessage.Datasource);
    let campaignsList = generateList(filterForMessage.Campaign);
    datasourceMessage = "Datasource " + datasourcesList;
    campaignMessage = "Campaign " + campaignsList;
  }
  filterMessage = datasourceMessage + "; " + campaignMessage;
  return filterMessage;
}

function generateList(filterItem) {
  // Receives an array of filter values. Generates a string of maximum 3 values
  // if multiple filter values are selected.
  let string = "";
  let newString;
  for (let entry = 0; entry < filterItem.length && entry < 3; entry++) {
    string = string + JSON.stringify(filterItem[entry]) + " and ";
  }

  if (filterItem.length <= 3) {
    newString = string.slice(0, -4);
  } else {
    newString = string.slice(0, -5) + ", etc.";
  }
  return newString;
}
