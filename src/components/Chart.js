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
  console.log("filter", filter);
  let string="";

    const name=Object.keys(filter);
    const value=Object.values(filter);
    console.log("name", name, "value", value)
    string=".includes"
    const a=filter.Datasource;
    console.log("a", a)
    const b=filter.Campaign;
  /*for (let i=0;i<filter.length;i++){
    string=string
  }*/
  //debugger;
  
  let filteredArray=[];
  if(!(Object.entries(filter).length === 0 && filter.constructor === Object)&&(a === undefined || a.length == 0)){
  filteredArray=_.filter(data, function(i) {
    //debugger;
    return b.includes(i.Campaign) });
    //console.log("filteredArray",filteredArray);
  } else if(!(Object.entries(filter).length === 0 && filter.constructor === Object)&&(b === undefined || b.length == 0)){
  filteredArray=_.filter(data, function(i) {
    //debugger;
    return a.includes(i.Datasource) });
    //console.log("filteredArray",filteredArray);
 } else if(!(Object.entries(filter).length === 0 && filter.constructor === Object)) {
  filteredArray=_.filter(data, function(i) {
    //debugger;
    return a.includes(i.Datasource) && b.includes(i.Campaign)  });
  
 }
 console.log("filteredArray",filteredArray);
  

  let finalImpressionsArray2=[];
  let finalClicksArray2=[];
  if (apply==true){
  let groupByDate2 = _.groupBy(filteredArray, "Date");
  //console.log("filtere", filter);
  let uniqueDates2= _.keys(groupByDate2);
  //console.log("uniqueDates", uniqueDates);
  let impressionsArray2 = [];
  let clicksArray2 = [];

  for (let dayEntry = 0; dayEntry < uniqueDates2.length; dayEntry++) {
    let totalImpressions2 = 0;
    let totalClicks2 = 0;
    let message2="All data";
    for (
      let dataRow = 0;
      dataRow < groupByDate2[uniqueDates2[dayEntry]].length;
      dataRow++
    ) {
      console.log("dayEntry", dayEntry, "uniqueDates2[dayEntry]", uniqueDates2[dayEntry])
      
      let uniqueFilterEntries=_.keys(filter);
        //console.log("uniqueFilterEntries", uniqueFilterEntries);
        
        let conditionsCheck=[];
        
        for (let filterKey=0;filterKey<uniqueFilterEntries.length;filterKey++){
      
          if (filter[uniqueFilterEntries[filterKey]].includes(groupByDate2[uniqueDates2[dayEntry]][dataRow][uniqueFilterEntries[filterKey]])){
            
            conditionsCheck.push(true)
            //console.log(filter[uniqueFilterEntries[filterKey]], " includes ", groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]] )
          } else{
            conditionsCheck.push(false);
          }

        }
        //console.log("conditionsCheck", conditionsCheck);

        if (!conditionsCheck.includes(false)){
          totalImpressions2 =
          totalImpressions2 +
          groupByDate2[uniqueDates2[dayEntry]][dataRow].Impressions;
          totalClicks2 =
          totalClicks2 + groupByDate2[uniqueDates2[dayEntry]][dataRow].Clicks;
          console.log()
        }



    }
    console.log ("totalImpressions2", totalImpressions2);
    console.log ("totalClicks2", totalClicks2);
    impressionsArray2.push(totalImpressions2);
    clicksArray2.push(totalClicks2);
  }
  console.log("impressionsArray2", impressionsArray2);
  console.log("clicksArray2", clicksArray2);
  finalImpressionsArray2=impressionsArray2;
  finalClicksArray2=clicksArray2;
  const sumImpressions2=_.sum(impressionsArray2);
  const sumClicks2=_.sum(clicksArray2);
  console.log("sumImpressions2", sumImpressions2);
  console.log("sumClicks2",sumClicks2);

  console.log("finalImpressionsArray2", finalImpressionsArray2);
  console.log("finalClicksArray2", finalClicksArray2);
}









  let groupByDate = _.groupBy(data, "Date");
  //console.log("filtere", filter);
  let uniqueDates = _.keys(groupByDate);
  //console.log("uniqueDates", uniqueDates);
  let impressionsArray = [];
  let clicksArray = [];
   




  


  for (let dayEntry = 0; dayEntry < uniqueDates.length; dayEntry++) {
    let totalImpressions = 0;
    let totalClicks = 0;
    let message="All data";
    for (
      let dataRow = 0;
      dataRow < groupByDate[uniqueDates[dayEntry]].length;
      dataRow++
    ) {
       //if(apply==true && !_.isEmpty(filter)){

       if(apply==true){
        //console.log("APPLY FILTEER");
        //console.log("filtr", filter);
        //groupByDate[uniqueDates[dayEntry]][dataRow]
        let uniqueFilterEntries=_.keys(filter);
        //console.log("uniqueFilterEntries", uniqueFilterEntries);
        
        let conditionsCheck=[];
        
        for (let filterKey=0;filterKey<uniqueFilterEntries.length;filterKey++){
      
          if (filter[uniqueFilterEntries[filterKey]].includes(groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]])){
            
            conditionsCheck.push(true)
            //console.log(filter[uniqueFilterEntries[filterKey]], " includes ", groupByDate[uniqueDates[dayEntry]][dataRow][uniqueFilterEntries[filterKey]] )
          } else{
            conditionsCheck.push(false);
          }

        }
        //console.log("conditionsCheck", conditionsCheck);

        if (!conditionsCheck.includes(false)){
          totalImpressions =
          totalImpressions +
          groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
          totalClicks =
          totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;

        }

      } else {

        
      totalImpressions =
        totalImpressions +
        groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
      totalClicks =
        totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
        let uniqueFilterEntries=_.keys(filter);
        for (let filterItem=0;filterItem<filter.length;filterItem++){
          debugger;
          message=message + filter[uniqueFilterEntries[filterItem]];
          //console.log("message", message);
        }
         //console.log("message", message);
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

        data: /*clicksArray*/ finalClicksArray2
      },

      {
        name: "Impressions",
        yAxis: 1,

        data: /*impressionsArray*/ finalImpressionsArray2
      }
    ]
  };

  return options;
}
