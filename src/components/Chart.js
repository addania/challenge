import * as React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bootstrap from "react-bootstrap";
import { generateChartOptions } from "../functions/generateChartOptions";

export const Chart = ({ coreData, filters, applyFilters, styling }) => (
  // Defines a visualization components which will render a HighchartsReact component
  // based on options generated from data and filters
  <div data-testid="chart">
    <Bootstrap.Row>
      <Bootstrap.Col sm={12}>
        <h2 style={styling}>Chart</h2>
      </Bootstrap.Col>
    </Bootstrap.Row>
    <HighchartsReact
      highcharts={Highcharts}
      options={generateChartOptions(coreData, filters, applyFilters)}
    />
  </div>
);
