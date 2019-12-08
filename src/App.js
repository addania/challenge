import React, { useState, useEffect } from 'react';
import './App.css';
import './Button.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
//import Multiselect from 'react-bootstrap-multiselect';
import { Chart } from "./components/Chart.js";
import { Filter } from "./components/Filter.js";
import _ from 'lodash';


function App() {
  const [data, setData] = useState([
      {Date: "01.01.2019", Datasource: "Facebook Ads", 
      Campaign: "Like Ads", Clicks: 274, Impressions: 1979},
      {Date: "01.01.2019", Datasource: "Facebook Ads", 
      Campaign: "Offer Campaigns - Conversions", Clicks: 10245, Impressions: 764627},
      {Date: "01.01.2019", Datasource: "Google Adwords", 
      Campaign: "B2B - Leads", Clicks: 7, Impressions: 444},
      {Date: "01.01.2019", Datasource: "Google Adwords", 
      Campaign: "GDN Prospecting - App - Prio 1 Offer", Clicks: 16, Impressions: 12535},
      {Date: "20.01.2019", Datasource: "Google Adwords", 
      Campaign: "GDN Prospecting - App - Prio 1 Offer", Clicks: 25, Impressions: 10535},
    ])
  const [selectedColumns, setColumns] = useState([]);
  /*const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);*/
  const [selectedValues, setSelectedValues] = useState({});
  
  const styles={
    margin: "30px 0px", 
    textAlign: "left", 
    color:"#8DA1B9",
    }
  
  //console.log(JSON.stringify(data));
  

  const tableColumns=getColumns(data);

  //console.log("tableColumns", tableColumns);
  
  const dataWithDateFormat=formatDate(data);
  //console.log("dataWithDateFormat", dataWithDateFormat);
  const sortedData=sortArray(dataWithDateFormat, );
  //console.log("sorted data", sortedData);
  

  const metrics=getMetrics(sortedData, tableColumns);
  //console.log("metrics", metrics);
  const dimensions=getDimensions(sortedData, tableColumns);
  //console.log("dimension", dimensions);
  const dates=getDates(sortedData, tableColumns);
  //console.log("dates", dates);
  

  //const dataMulti = [{ value:'One', selected:true }, { value: 'Two' }, { value:'Three' }]
  
  function handleChange(e, data){
    
    //console.log("e", e);
    //console.log("data", data);
    //console.log("data/placeholder", data.placeholder);
    /*if (data.placeholder =="Datasource"){
      setSelectedValues(data.value);
    } else if (data.placeholder =="Campaign"){
      setSelectedValues2(data.value);
    }*/
    let newState={...selectedValues}
    let key=data.placeholder;
    
    newState=Object.assign(newState, {[key]:data.value});
    setSelectedValues(newState);
    //console.log ("selectedValues", selectedValues);
    
    console.log ("newState", newState);
    
    //console.log("data.value", data.value);
  }
  
  /*function handleClick(){
    return 0
  };*/

  const testDates = [
    sortedData[0].Date, 
    sortedData[1].Date, 
    sortedData[2].Date, 
    sortedData[3].Date, 
    sortedData[4].Date, 
  ];

  //console.log("selected values", selectedValues);
  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader dimensionsColumns={dimensions} metricsColumns={metrics}/>
        <Row>
          <Col sm={4} style={{backgroundColor:"#EFF2F1"}}>  
            <Filter styling={styles} filterColumns={dimensions} onChange={handleChange} dataSet={sortedData}/>
            <button type="submit" style={{ backgroundColor: "#8DA1B9", color: "white", borderRadius: "2px", width: "80px", padding: "5px 0px", position: "left", marginTop: "10px"}}>
              <span>
                Apply
              </span>
            </button>
            <p>
              Selected values Datasource: {selectedValues.Datasource}
            </p>
            <p>
              Selected values Campaigns: {selectedValues.Campaign}
            </p>
          </Col>
          <Col sm={8}>
            <Chart styling={styles} coreData={sortedData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

function formatDate(input){
  const dataWithDate=[];
  for (let row=0;row<input.length;row++){
    const entry={...input[row]};
    //console.log("entry", entry)
    const oldDate=input[row].Date;
    //console.log(oldDate);
    const year=oldDate.slice(6,10)
    //console.log("year", year);
    const month=oldDate.slice(3,5)
    //console.log("month", month);
    const day=oldDate.slice(0,2)
    //console.log("day", day);
    const newDate=year+"-"+month+"-"+day;
    //console.log("newDate", newDate);
    const dateFormatted = new Date(newDate);
    //console.log("dateFormatted",dateFormatted);
    entry.Date=dateFormatted;
    //console.log("entryPOST", entry);
    dataWithDate.push(entry);
  }
  //console.log("dataWithDate", dataWithDate);
  //const output=_.sortBy(dataWithDate, ["Date", "Datasource", "Campaign"]);
  
  //console.log("dat OUTPUT", output);
  return dataWithDate;
}


function sortArray(input){
  const output=_.sortBy(input, ["Date", "Datasource", ]);
  return output;
}

function getColumns(input){
  const output=Object.keys(input[0])
  return output;
}

function getDimensions(inputData, inputColumns){
  const output=[];
  for (let item=0; item<inputColumns.length;item++){
    //debugger;
    const col=inputColumns[item];
    //console.log("col",col);
    //console.log("inputData[0].col", inputData[0][col])
    if (_.isString(inputData[0][col])){
      output.push(col);
    }
  }
  return output;
}
function getDates(inputData, inputColumns){
  const output=[];
  for (let item=0; item<inputColumns.length;item++){
    //debugger;
    const col=inputColumns[item];
    //console.log("col",col);
    //console.log("inputData[0].col", inputData[0][col])
    if (_.isDate(inputData[0][col])){
      output.push(col);
    }
  }
  return output;
}

function getMetrics(inputData, inputColumns){
  const output=[];
  for (let item=0; item<inputColumns.length;item++){
    //debugger;
    const col=inputColumns[item];
    //console.log("col",col);
    //console.log("inputData[0].col", inputData[0][col])
    if (_.isNumber(inputData[0][col])){
      output.push(col);
    }
  }
  return output;
}