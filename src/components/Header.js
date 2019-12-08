import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Header() {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <h2
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
}
