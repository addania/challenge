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
import { csvJSON } from "./functions/csvJSON";
import { formatImpressions } from "./functions/formatImpressions";
import { extractDate } from "./functions/extractDate";
import { sortArray } from "./functions/sortArray";
import { getColumns } from "./functions/getColumns";
import { getMetrics } from "./functions/getMetrics";
import { getDimensions } from "./functions/getDimensions";
import { getDates } from "./functions/getDates";
import { formatDate } from "./functions/formatDate";

function App() {
  const [data, setData] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const [useFilters, setUseFilters] = useState(false);
  const [filteredData, setFilteredData] = useState(0);

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
      const formattedDates = extractDate(formattedImpressions);
      const sortedData = sortArray(formattedDates);
      const tableColumns = getColumns(sortedData[0]);
      const metricColumns = getMetrics(sortedData[0], tableColumns);
      const dimensionColumns = getDimensions(sortedData[0], tableColumns);
      const dateColumns = getDates(sortedData[0], tableColumns);
      const finalData = formatDate(sortedData);
      setData(finalData);
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
    // Function is triggered on every change of Filter component. Receives information about event as input.
    // Sets selectedValues state with information about which columns and their values were selected.
    // Sets useFilter state to false when new filter was selected but button Apply was not yet clicked.
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
    // Function is triggered on every click on the Button Apply component.
    // Sets useFilter state to true when the button Apply was clicked (unless filters are empty).
    if (
      !(
        Object.entries(selectedValues).length === 0 &&
        selectedValues.constructor === Object
      )
    ) {
      let newState = true;
      setUseFilters(newState);
      setFilteredData(selectedValues);
    } else {
      let newState = false;
      setUseFilters(newState);
    }
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader dimensionsColumns={dimensions} metricsColumns={metrics} />
        <Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
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
              filters={filteredData}
              applyFilters={useFilters}
              styling={styles}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
