import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import './App.css';
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
import { Field } from "./components/Field.js";
import _ from 'lodash';

function App() {
  const [data, setData] = useState([
      {Date: "01.03.2019", Datasource: "Facebook Ads", 
      Campaign: "Like Ads", Clicks: 274, Impressions: 1979},
      {Date: "20.01.2019", Datasource: "Facebook Ads", 
      Campaign: "Offer Campaigns - Conversions", Clicks: 10245, Impressions: 764627},
      {Date: "01.01.2019", Datasource: "Google Adwords", 
      Campaign: "B2B - Leads", Clicks: 7, Impressions: 444},
      {Date: "01.01.2019", Datasource: "Google Adwords", 
      Campaign: "GDN Prospecting - App - Prio 1 Offer", Clicks: 16, Impressions: 12535},
      {Date: "01.01.2019", Datasource: "Google Adwords", 
      Campaign: "GDN Prospecting - App - Prio 1 Offer", Clicks: 25, Impressions: 10535},
    ])
  const [columns, setColumns] = useState([]);

  console.log(JSON.stringify(data));
  const tableColumns=getColumns(data);
  console.log("tableColumns", tableColumns);
  const dimensions=getDimensions(data, tableColumns);
  console.log("dimension", dimensions);
  const sortedData=sortArray(data);
  console.log("sorted data", sortedData);
  
  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader />
        <Field />

      </Container>
    </div>
  );
}

export default App;

function sortArray(input){
  const output=_.sortBy(input, ["Date", "Datasource"]);
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