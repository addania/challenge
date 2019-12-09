import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { List } from "./List.js";

export function Subheader(props) {
  const message = "Select zero to N ";
  const italics = { fontStyle: "italic" };
  const listItems = [];
  for (
    let listItem = 0;
    listItem < props.dimensionsColumns.length;
    listItem++
  ) {
    listItems.push(
      <List
        message={message}
        columns={props.dimensionsColumns[listItem]}
        styling={italics}
        key={listItem}
      />
    );
  }

  return (
    <div>
      <Row>
        <Col sm={12}>
          <div
            style={{
              margin: "20px 0px",
              textAlign: "left",
              color: "#828282",
              fontSize: "15px",
              borderBottom: "0.5px solid #E8E8EA",
              paddingBottom: "20px"
            }}
          >
            <ul style={{ paddingLeft: "20px" }}>{listItems}</ul>
            <p style={{ fontSize: "12px" }}>[where zero means "All"]</p>
            <p>
              Hitting "Apply" filters the chart to show a timeseries for both{" "}
              <span style={italics}>{props.metricsColumns[0]}</span> and{" "}
              <span style={italics}>{props.metricsColumns[1]}</span> for given{" "}
              <span style={italics}>{props.dimensionsColumns[0]}s</span> and{" "}
              <span style={italics}>{props.dimensionsColumns[1]}s</span> -
              logical AND
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
