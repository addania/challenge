import React from 'react';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Field() {
  const styles={
    margin: "30px 0px", 
    textAlign: "left", 
    color:"#8DA1B9"
    }
  return (
    <div>
      <Row>
        <Col sm={4}>
          <h2 style={styles}>
            Filter
          </h2>
        </Col>
        <Col sm={8}>
          <h2 style={styles}>
            Graph
          </h2>
        </Col>
      </Row>
    </div>
  );
}
