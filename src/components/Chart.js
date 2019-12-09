import React from "react";
import _ from "lodash";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export function Chart({ coreData, filters, applyFilters, onClick, styling }) {
  let generateCondition;
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
              position: "left",
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
  //console.log("filter", filter);
  let aggregatedImpressions;
  let aggregatedClicks;
  let aggregatedDates;
  if (apply) {
    const arrayAfterFiltering = filterArray(filter, data);
    const aggregatedData = calculateAggregates(arrayAfterFiltering);
    aggregatedImpressions = aggregatedData[0];
    aggregatedClicks = aggregatedData[1];
    aggregatedDates = aggregatedData[2];
  } else {
    const aggregatedData = calculateAggregates(data);
    aggregatedImpressions = aggregatedData[0];
    aggregatedClicks = aggregatedData[1];
    aggregatedDates = aggregatedData[2];
  }
  const optionsFilteredData = generateOptions(
    aggregatedImpressions,
    aggregatedClicks,
    aggregatedDates
  );
  return optionsFilteredData;
}

function filterArray(filtering, dataForFiltering) {
  const value = Object.values(filtering);
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
  let groupByDate = _.groupBy(array, "Date");
  let uniqueDates = _.keys(groupByDate);
  let impressionsArray = [];
  let clicksArray = [];

  for (let dayEntry = 0; dayEntry < uniqueDates.length; dayEntry++) {
    let totalImpressions = 0;
    let totalClicks = 0;
    let message2 = "All data";

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
  datesForOptions
) {
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
      text: "Datasources",
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
