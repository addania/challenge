import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => (
  // Defines a header to be displayed as a title on the pages
  <div>
    <Row>
      <Col sm={12}>
        <h2
          data-testid="header"
          style={{
            margin: "20px 0px",
            textAlign: "left",
            color: "#7F6A93",
            borderBottom: "0.5px solid #E8E8EA",
            paddingBottom: "20px"
          }}
        >
          Advertising Data ETL-V Challenge
        </h2>
      </Col>
    </Row>
  </div>
);
