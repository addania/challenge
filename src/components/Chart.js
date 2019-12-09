import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import _ from "lodash";

export function Chart({ coreData, filters, applyFilters, onClick, styling }) {
  //console.log(coreData.Date);
  //console.log(filters);
  //console.log(applyFilters);
  let generateCondition;
  let calculatedOptions = calculateOptions(coreData, filters, applyFilters);

  //console.log("generatedOptions", generatedOptions);

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
  if (apply){
  const arrayAfterFiltering= filterArray(filter, data);
  console.log("arrayAfterFiltering", arrayAfterFiltering);
  
  const aggregatedData=calculateAggregates(arrayAfterFiltering);
  console.log("aggregatedData", aggregatedData);
  aggregatedImpressions=aggregatedData[0];
  console.log("aggregatedImpressions", aggregatedImpressions);
  aggregatedClicks=aggregatedData[1];
  console.log("aggregatedClicks", aggregatedClicks);
  aggregatedDates=aggregatedData[2];
  }
   else {
  const aggregatedData=calculateAggregates(data);
  console.log("aggregatedData", aggregatedData);
  aggregatedImpressions=aggregatedData[0];
  console.log("aggregatedImpressions", aggregatedImpressions);
  aggregatedClicks=aggregatedData[1];
  console.log("aggregatedClicks", aggregatedClicks);
  aggregatedDates=aggregatedData[2];
  console.log("aggregatedDates", aggregatedDates);
  }
  const optionsFilteredData=generateOptions(aggregatedImpressions,aggregatedClicks, aggregatedDates )
  //const optionsAllData=generateOptions(aggregatedData2)
  //return options;
  return optionsFilteredData;
}


function filterArray(filtering, dataForFiltering){

  //const name = Object.keys(filtering);
  const value = Object.values(filtering);
  //console.log("name", name, "value", value);
  
  const filteredDatasources = filtering.Datasource;
  //console.log("filteredDatasources", filteredDatasources)
  const filteredCampaigns = filtering.Campaign;
 
  let filteredArray = [];
  if (
    !(Object.entries(filtering).length === 0 && filtering.constructor === Object) &&
    (filteredDatasources === undefined || filteredDatasources.length == 0)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      //debugger;
      return filteredCampaigns.includes(i.Campaign);
    });
    //console.log("filteredArray",filteredArray);
  } else if (
    !(Object.entries(filtering).length === 0 && filtering.constructor === Object) &&
    (filteredCampaigns === undefined || filteredCampaigns.length == 0)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      //debugger;
      return filteredDatasources.includes(i.Datasource);
    });
    //console.log("filteredArray",filteredArray);
  } else if (
    !(Object.entries(filtering).length === 0 && filtering.constructor === Object)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      //debugger;
      return filteredDatasources.includes(i.Datasource) && filteredCampaigns.includes(i.Campaign);
    });
  }
  //console.log("filteredArray", filteredArray);
  return filteredArray;
} 

function calculateAggregates(array){
    console.log("array", array);
    let groupByDate = _.groupBy(array, "Date");
    //console.log("filtere", filtering);
    console.log("groupByDate", groupByDate);
    let uniqueDates = _.keys(groupByDate);
    //console.log("uniqueDates", uniqueDates);
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
        //console.log("dayEntry",dayEntry,"uniqueDates[dayEntry]",uniqueDates[dayEntry]);

        /*let uniqueFilterEntries = _.keys(filtering);
        console.log("uniqueFilterEntries", uniqueFilterEntries);

        let conditionsCheck = [];*/
        
        /*for (
          let filterKey = 0;
          filterKey < uniqueFilterEntries.length;
          filterKey++
        ) {

        /*
          if (
            filtering[uniqueFilterEntries[filterKey]].includes(
              groupByDate[uniqueDates[dayEntry]][dataRow][
                uniqueFilterEntries[filterKey]
              ]
            )
          ) {
            conditionsCheck.push(true);
            //console.log(filtering[uniqueFilterEntries[filterKey]], " includes ", groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]] )
          } else {
            conditionsCheck.push(false);
          }
        }
        //console.log("conditionsCheck", conditionsCheck);
*/
       // if (!conditionsCheck.includes(false)) {
          totalImpressions =
            totalImpressions +
            groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
          totalClicks =
            totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
          //console.log();
       // }
      }
      console.log("totalImpressions", totalImpressions);
      console.log("totalClicks", totalClicks);
      impressionsArray.push(totalImpressions);
      clicksArray.push(totalClicks);
      /**/
    }
    /*
    console.log("impressionsArray", impressionsArray);
    console.log("clicksArray", clicksArray);
    finalImpressionsArray = impressionsArray;
    finalClicksArray = clicksArray;
    const sumImpressions = _.sum(impressionsArray);
    const sumClicks = _.sum(clicksArray);
    console.log("sumImpressions", sumImpressions);
    console.log("sumClicks", sumClicks);

    console.log("finalImpressionsArray", finalImpressionsArray);
    console.log("finalClicksArray", finalClicksArray);
    */
 

/*
    let groupByDate = _.groupBy(array, "Date");
    //console.log("filtere", filtering);
    let uniqueDates = _.keys(groupByDate);
    //console.log("uniqueDates", uniqueDates);
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
        console.log(
          "dayEntry",
          dayEntry,
          "uniqueDates[dayEntry]",
          uniqueDates[dayEntry]
        );

        let uniqueFilterEntries = _.keys(filtering);
        //console.log("uniqueFilterEntries", uniqueFilterEntries);

        let conditionsCheck = [];

        for (
          let filterKey = 0;
          filterKey < uniqueFilterEntries.length;
          filterKey++
        ) {
          if (
            filtering[uniqueFilterEntries[filterKey]].includes(
              groupByDate[uniqueDates[dayEntry]][dataRow][
                uniqueFilterEntries[filterKey]
              ]
            )
          ) { 
            conditionsCheck.push(true);
            //console.log(filtering[uniqueFilterEntries[filterKey]], " includes ", groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]] )
          }  else {  
            conditionsCheck.push(false);
          } 
        }
        //console.log("conditionsCheck", conditionsCheck);

        if (!conditionsCheck.includes(false)) {
          totalImpressions =
            totalImpressions +
            groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
          totalClicks =
            totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
          console.log();
        }
      }
      console.log("totalImpressions", totalImpressions);
      console.log("totalClicks", totalClicks);
      impressionsArray.push(totalImpressions);
      clicksArray.push(totalClicks);
    }
    console.log("impressionsArray", impressionsArray);
    console.log("clicksArray", clicksArray);
    finalImpressionsArray = impressionsArray;
    finalClicksArray = clicksArray;
    const sumImpressions = _.sum(impressionsArray);
    const sumClicks = _.sum(clicksArray);
    console.log("sumImpressions", sumImpressions);
    console.log("sumClicks", sumClicks);

    console.log("finalImpressionsArray", finalImpressionsArray);
    console.log("finalClicksArray", finalClicksArray); */
    return [impressionsArray, clicksArray, uniqueDates]
    //return 0
  }

  function generateOptions(impressionsForOptions, clicksForOptions, datesForOptions){
    
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
  return options
  }