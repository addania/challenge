import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [selectedColumns, setColumns] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const [useFilters, setUseFilters] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        // VERSION FOR PUBLISHING ON GH-PAGES:
        //"https://raw.githubusercontent.com/addania/challenge/master/src/data/source.csv?raw=true"
        "http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"
      );
      const csvData = await response.text();
      const jsonData = csvJSON(csvData);
      const formattedImpressions = formatImpressions(jsonData);
      const formattedDates = formatDate(formattedImpressions);
      const sortedData = sortArray(formattedDates);
      const tableColumns = getColumns(sortedData[0]);
      const metricColumns = getMetrics(sortedData[0], tableColumns);
      const dimensionColumns = getDimensions(sortedData[0], tableColumns);
      const dateColumns = getDates(sortedData[0], tableColumns);
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

  function handleChange(e, data) {
    setUseFilters(false);
    if (data.value === undefined || data.value == 0) {
      let newState = { ...selectedValues };
      delete newState[data.placeholder];
      setSelectedValues(newState);
    } else {
      let newState = { ...selectedValues };
      let key = data.placeholder;
      newState = Object.assign(newState, { [key]: data.value });
      setSelectedValues(newState);
    }
  }
  function handleClick() {
    let newState = true;
    setUseFilters(newState);
  }

  function handleReset() {
    let newState = false;
    setUseFilters(newState);
  }

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
  let removeLast = result.pop();
  return result;
}

function formatImpressions(input) {
  for (let row = 0; row < input.length; row++) {
    if (!input[row].Impressions) {
      input[row].Impressions = 0;
    }
    if (!input[row].Clicks) {
      input[row].Clicks = 0;
    }
  }
  return input;
}

function formatDate(input) {
  const dataWithDate = [];
  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };
    const oldDate = input[row].Date;
    const year = oldDate.slice(6, 10);
    const month = oldDate.slice(3, 5);
    const day = oldDate.slice(0, 2);
    const newDate = year + "-" + month + "-" + day;
    const dateFormatted = new Date(newDate);
    entry.Date = dateFormatted;
    dataWithDate.push(entry);
  }
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
    const col = inputColumns[item];
    if (_.isNumber(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}

function getDimensions(inputData, inputColumns) {
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    const col = inputColumns[item];
    if (_.isString(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}
function getDates(inputData, inputColumns) {
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    const col = inputColumns[item];
    if (_.isDate(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}
