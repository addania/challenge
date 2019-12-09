import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
import { Chart } from "./components/Chart.js";
import { Filter } from "./components/Filter.js";
import { Button } from "./components/Button.js";

function App() {
  const [data, setData] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [dates, setDates] = useState([]);

  //const [data, setData] = useState([]);

  const [selectedColumns, setColumns] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const [useFilters, setUseFilters] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"
      );
      const csvData = await response.text();

      //console.log("CSV IMPORT TEST", datas);

      //console.log("csvData", csvData);
      const jsonData = csvJSON(csvData);
      //console.log("jsonData", jsonData);
      const formattedImpressions = formatImpressions(jsonData);
      //console.log("formattedImpressions", formattedImpressions);
      const formattedDates = formatDate(formattedImpressions);
      //console.log("formattedDates", formattedDates);
      const sortedData = sortArray(formattedDates);
      //console.log("sortedData", sortedData);
      const tableColumns = getColumns(sortedData[0]);
      //console.log("tableColumns", tableColumns);
      const metricColumns = getMetrics(sortedData[0], tableColumns);
      //console.log("metricColumns", metricColumns);
      const dimensionColumns = getDimensions(sortedData[0], tableColumns);
      //console.log("dimension", dimensionColumns);
      const dateColumns = getDates(sortedData[0], tableColumns);
      //console.log("dates", dateColumns);
      setData(sortedData);
      setMetrics(metricColumns);
      setDimensions(dimensionColumns);
      setDates(dateColumns);
    }
    fetchData();
  }, []);

  const styles = {
    margin: "30px 0px",
    textAlign: "left",
    color: "#8DA1B9"
  };

  //console.log(JSON.stringify(data));
  //const dataMulti = [{ value:'One', selected:true }, { value: 'Two' }, { value:'Three' }]

  function handleChange(e, data) {
    //console.log("e", e);
    //console.log("data", data);
    //console.log("data/placeholder", data.placeholder);
    /*if (data.placeholder =="Datasource"){
      setSelectedValues(data.value);
    } else if (data.placeholder =="Campaign"){
      setSelectedValues2(data.value);
    }*/
    //console.log("data.value", data.value);
    setUseFilters(false);
    if (data.value === undefined || data.value == 0) {
      //debugger;
      let newState = { ...selectedValues };
      delete newState[data.placeholder];
      setSelectedValues(newState);
    } else {
      let newState = { ...selectedValues };
      let key = data.placeholder;

      newState = Object.assign(newState, { [key]: data.value });
      setSelectedValues(newState);

      // setUseFilters(false);
      //console.log ("selectedValues", selectedValues);

      //console.log("newState", newState);
    }
  }
  function handleClick() {
    let newState = true;
    setUseFilters(newState);
    // setSelectedValues({});
  }

  function handleReset() {
    let newState = false;
    setUseFilters(newState);
    //setSelectedValues({});
  }
  //console.log("useFilters", useFilters);

  //console.log("selected values", selectedValues);
  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader dimensionsColumns={dimensions} metricsColumns={metrics} />
        <Row>
          <Col sm={4} style={{ backgroundColor: "#EFF2F1" }}>
            <Filter
              styling={styles}
              filterColumns={dimensions}
              onChange={handleChange}
              dataSet={data}
            />
            <Button onClick={handleClick} />
          </Col>
          <Col sm={8}>
            <Chart
              coreData={data}
              filters={selectedValues}
              applyFilters={useFilters}
              onClick={handleReset}
              styling={styles}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

function csvJSON(csv) {
  //console.log(csv);
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      const columnValue = currentline[j];

      if (j == 3 || j == 4) {
        obj[headers[j]] = parseInt(columnValue);
      } else {
        obj[headers[j]] = columnValue;
      }
    }
 
    result.push(obj);
  }
  let removeLast=result.pop();
  //console.log(removeLast);
  //console.log(result);
  return result; 
}

function formatImpressions(input) {
  for (let row = 0; row < input.length; row++) {
    if (!input[row].Impressions) {
      input[row].Impressions = 0;
      //console.log("row", row, "impressions", input[row].Impressions, "typeof", typeof input[row].Impressions);
    }
    if (!input[row].Clicks) {
      input[row].Clicks = 0;
      //console.log(input[row].Clicks);
    }
  }
  return input;
}

function formatDate(input) {
  const dataWithDate = [];

  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };

    //console.log("entry", entry)
    const oldDate = input[row].Date;
    //console.log(oldDate);
    const year = oldDate.slice(6, 10);
    //console.log("year", year);
    const month = oldDate.slice(3, 5);
    //console.log("month", month);
    const day = oldDate.slice(0, 2);
    //console.log("day", day);
    const newDate = year + "-" + month + "-" + day;
    //console.log("newDate", newDate);
    const dateFormatted = new Date(newDate);
    //console.log("dateFormatted",dateFormatted);
    entry.Date = dateFormatted;
    //console.log("entryPOST", entry);
    dataWithDate.push(entry);
  }
  //console.log("dataWithDate", dataWithDate);
  //const output=_.sortBy(dataWithDate, ["Date", "Datasource", "Campaign"]);

  //console.log("dat OUTPUT", output);
  return dataWithDate;
}

function sortArray(input) {
  const output = _.sortBy(input, ["Date", "Datasource"]);
  return output;
}

function getColumns(input) {
  const output = Object.keys(input);
  return output;
}

function getMetrics(inputData, inputColumns) {
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    //debugger;
    const col = inputColumns[item];
    //console.log("col",col);
    //console.log("inputData[0].col", inputData[0][col])
    //debugger;
    if (_.isNumber(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}

function getDimensions(inputData, inputColumns) {
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    //debugger;
    const col = inputColumns[item];
    //console.log("col",col);
    //console.log("inputData[0].col", inputData[0][col])
    if (_.isString(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}
function getDates(inputData, inputColumns) {
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    //debugger;
    const col = inputColumns[item];
    //console.log("col",col);
    //console.log("inputData[0].col", inputData[0][col])
    if (_.isDate(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}

/*
  import { TestData } from "./components/TestData.js";
  //import dataSet from "./data/data2.json";
  //console.log("tableColumns", tableColumns);
  /*DONE const dataWithDateFormat = formatDate(dataSet);
  /*DONE const formattedImpressions=formatImpressions(dataWithDateFormat);
  //console.log("dataWithDateFormat", dataWithDateFormat);
  /*DONE const sortedData = sortArray(formattedImpressions);
  //console.log("sorted data", sortedData);
  /*DONE const tableColumns = getColumns(dataSet);
  /*DONE const metrics = getMetrics(sortedData, tableColumns);
  //console.log("metrics", metrics);
  /* DONE const dimensions = getDimensions(sortedData, tableColumns);
  //console.log("dimension", dimensions);
  /* DONE const dates = getDates(sortedData, tableColumns);
  //console.log("dates", dates);
  */

/* useEffect(()=> {
  const data =
    fetch("http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv").then(response => {
      return response.text()
    }).then(d => {
      setDatas(d);
      console.log("CSV IMPORT TEST", datas);
      const a=datas[0];
    })
  } ,[])*/

//const jsonBLA=csvJSON(datas);
/*
  const [data, setData] = useState([ 
    {
      Date: "01.01.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.01.2019",
      Datasource: "Google Adwords",
      Campaign: "B2B - Leads",
      AdGroup: "A",
      Clicks: 7,
      Impressions: 444
    },
    {
      Date: "01.01.2019",
      Datasource: "Google Adwords",
      Campaign: "GDN Prospecting - App - Prio 1 Offer",
      AdGroup: "B",
      Clicks: 16,
      Impressions: 12535
    },
    {
      Date: "20.01.2019",
      Datasource: "Google Adwords",
      Campaign: "GDN Prospecting - App - Prio 1 Offer",
      AdGroup: "A",
      Clicks: 250,
      Impressions: 10535
    }
  ]);
  */
/*
  const [data, setData] = useState([
    {
      Date: "23.01.2019",
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      AdGroup: "A",
      Clicks: 274,
      Impressions: 1979
    },
    {
      Date: "08.02.2019",
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      AdGroup: "A",
      Clicks: 274,
      Impressions: 1979
    },
    {
      Date: "01.01.2019",
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      AdGroup: "A",
      Clicks: 274,
      Impressions: 1979
    },
    {
      Date: "01.01.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.01.2019",
      Datasource: "Google Adwords",
      Campaign: "B2B - Leads",
      AdGroup: "A",
      Clicks: 7,
      Impressions: 444
    },
    {
      Date: "01.01.2019",
      Datasource: "Google Adwords",
      Campaign: "GDN Prospecting - App - Prio 1 Offer",
      AdGroup: "B",
      Clicks: 16,
      Impressions: 12535
    },
    {
      Date: "20.01.2019",
      Datasource: "Google Adwords",
      Campaign: "GDN Prospecting - App - Prio 1 Offer",
      AdGroup: "A",
      Clicks: 250,
      Impressions: 10535
    },
    {
      Date: "01.03.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.04.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.05.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.06.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.07.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.08.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.09.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.10.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.11.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    },
    {
      Date: "01.12.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      AdGroup: "A",
      Clicks: 245,
      Impressions: 764627
    }
  ]);
  */
/*const testDates = [
    sortedData[0].Date,
    sortedData[1].Date,
    sortedData[2].Date,
    sortedData[3].Date,
    sortedData[4].Date
  ];*/
