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
  let generateCondition 
  let generatedOptions = generateOptions(coreData, filters, applyFilters);

  //console.log("generatedOptions", generatedOptions);
  /*const options = {
    chart: {
    type: 'spline'
    },
    xAxis: {
      categories: generatedOptions,
     
    },    
    yAxis:[{ // Primary yAxis
        labels: {
            format: '{value}',
            
            style: {
                color: Highcharts.getOptions().colors[0]
            },
        },
        title: {
            text: 'Clicks',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: false

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Impressions',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
       opposite: true
    }, ],

    title: {
      text: 'Datasources', 
      align: 'left'
    },
    series: [
    { 
        name: "Clicks",
        
        data: [12, 4, 3, 4, 4]
      },
   
      { 
        name: "Impressions",
        yAxis: 1,
        
        data: [10, 20, 30, 40, 30]
      },
   ]
  };*/

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
      <HighchartsReact highcharts={Highcharts} options={generatedOptions} />
    </div>
  );
}

function generateOptions(data, filter, apply) {
  let groupByDate = _.groupBy(data, "Date");
  console.log("filtere", filter);
  let uniqueDates = _.keys(groupByDate);
  //console.log("uniqueDates", uniqueDates);
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

       if(apply==true && !_.isEmpty(filter)){
        //console.log("APPLY FILTEER");
        console.log("filtr", filter);
        //groupByDate[uniqueDates[dayEntry]][dataRow]
        let uniqueFilterEntries=_.keys(filter);
        console.log("uniqueFilterEntries", uniqueFilterEntries);
        
        let conditionsCheck=[];
        
        for (let filterKey=0;filterKey<uniqueFilterEntries.length;filterKey++){
      
          if (filter[uniqueFilterEntries[filterKey]].includes(groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]])){
            
            conditionsCheck.push(true)
            console.log(filter[uniqueFilterEntries[filterKey]], " includes ", groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]] )
          } else{
            conditionsCheck.push(false);
          }

        }
        console.log("conditionsCheck", conditionsCheck);



      } else{
      totalImpressions =
        totalImpressions +
        groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
      totalClicks =
        totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
      }



      /*if(apply==true){
        //console.log("APPLY FILTEER");
        console.log("filtr", filter);
        //groupByDate[uniqueDates[dayEntry]][dataRow]
        let uniqueFilterEntries=_.keys(filter);
        console.log("uniqueFilterEntries", uniqueFilterEntries);
        let condition="";
        
        for (let filterKey=0;filterKey<uniqueFilterEntries.length;filterKey++){
           condition=condition+filter[uniqueFilterEntries[filterKey]].includes(groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]]+ "&&"
          if (filter[uniqueFilterEntries[filterKey]].includes(groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]])){
            console.log(filter[uniqueFilterEntries[filterKey]], " includes ", groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]] )
          }
        }




      } else{
      totalImpressions =
        totalImpressions +
        groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
      totalClicks =
        totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
      }*/
    }
    impressionsArray.push(totalImpressions);
    clicksArray.push(totalClicks);
  }
  //console.log("impressionsArray", impressionsArray);
  //console.log("clicksArray", clicksArray);

  let groupByCampaign = _.groupBy(data, "Campaign");
  //console.log("groupByCampaign", groupByCampaign);

  let groupByDatasource = _.groupBy(data, "Datasource");
  //console.log("groupByDatasource", groupByDatasource);

  const options = {
    chart: {
      type: "spline"
    },
    xAxis: {
      categories: uniqueDates
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

        data: clicksArray
      },

      {
        name: "Impressions",
        yAxis: 1,

        data: impressionsArray
      }
    ]
  };

  return options;
}
