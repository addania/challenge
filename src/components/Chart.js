import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { calculateOptions } from "../functions/calculateOptions";

export const Chart = ({ coreData, filters, applyFilters, styling }) => {
  // Defines a visualization components which will render a HighchartsReact component
  // based on options generated from data and filters
  let calculatedOptions = calculateOptions(coreData, filters, applyFilters);
  return (
    <div data-testid="chart">
      <Row>
        <Col sm={12}>
          <h2 style={styling}>Chart</h2>
        </Col>
      </Row>
      <HighchartsReact highcharts={Highcharts} options={calculatedOptions} />
    </div>
  );
};
