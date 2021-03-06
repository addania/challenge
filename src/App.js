import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bootstrap from "react-bootstrap";
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
import { Chart } from "./components/Chart.js";
import { Filters } from "./components/Filters.js";
import { Button } from "./components/Button.js";
import { parseData } from "./functions/parseData";
import { handleChangeHelper } from "./functions/handleChangeHelper";
import { handleClickHelper } from "./functions/handleClickHelper";

const App = () => {
  const [data, setData] = React.useState([]);
  const [metrics, setMetrics] = React.useState([]);
  const [dimensions, setDimensions] = React.useState([]);
  const [selectedValues, setSelectedValues] = React.useState({});
  const [useFilters, setUseFilters] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // VERSION FOR PUBLISHING ON GH-PAGES:
        //"https://raw.githubusercontent.com/addania/challenge/master/src/data/source.csv?raw=true"
        "http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"
      );
      const rawData = parseData(await response.text());
      setData(rawData.sortedData);
      setMetrics(rawData.metrics);
      setDimensions(rawData.dimensions);
    };
    fetchData();
  }, []);

  const styles = {
    margin: "30px 0px",
    textAlign: "left",
    color: "#8DA1B9"
  };

  const handleChange = (event, data) => {
    // Function is triggered on every change of Filter component. Receives information about event as input.
    // Sets selectedValues state with information about which columns and their values were selected.
    // Sets useFilter state to false when new filter was selected but button Apply was not yet clicked.
    setSelectedValues(handleChangeHelper(event, data, selectedValues));
  };
  const handleClick = () => {
    // Function is triggered on every click on the Button Apply component.
    // Sets useFilter state to true when the button Apply was clicked (unless filters are empty).
    setUseFilters(handleClickHelper(selectedValues).applyFilter);
    setFilteredData(handleClickHelper(selectedValues).filterValue);
  };
  return (
    <div className="App" data-testid="app">
      <Bootstrap.Container>
        <Header />
        <Subheader dimensionsColumns={dimensions} metricsColumns={metrics} />
        <Bootstrap.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <Bootstrap.Col sm={4} style={{ backgroundColor: "#EFF2F1" }}>
            <Filters
              styling={styles}
              filterColumns={dimensions}
              onChange={handleChange}
              dataSet={data}
            />
            <Button onClick={handleClick} />
          </Bootstrap.Col>
          <Bootstrap.Col sm={8}>
            <Chart
              coreData={data}
              filters={filteredData}
              applyFilters={useFilters}
              styling={styles}
            />
          </Bootstrap.Col>
        </Bootstrap.Row>
      </Bootstrap.Container>
    </div>
  );
};
export default App;
