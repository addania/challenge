import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { generateChartOptions } from "../functions/generateChartOptions";

export function Chart({ coreData, filters, applyFilters, styling }) {
  // Defines a visualization components which will render a HighchartsReact component
  // based on options generated from data and filters
  return (
    <div data-testid="chart">
      <Row>
        <Col sm={12}>
          <h2 style={styling}>Chart</h2>
        </Col>
      </Row>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateChartOptions(coreData, filters, applyFilters)}
      />
    </div>
  );
}
