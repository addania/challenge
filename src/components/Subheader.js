import * as React from "react";
import * as Bootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SubheaderList } from "./SubheaderList";

export const Subheader = ({ dimensionsColumns, metricsColumns }) => {
  // Defines a component Subheaher with more information about the application.
  const italics = { fontStyle: "italic" };
  return (
    <div>
      <Bootstrap.Row>
        <Bootstrap.Col sm={12}>
          <div
            data-testid="subheader"
            style={{
              margin: "20px 0px",
              textAlign: "left",
              color: "#828282",
              fontSize: "15px",
              borderBottom: "0.5px solid #E8E8EA",
              paddingBottom: "20px"
            }}
          >
            <ul style={{ paddingLeft: "20px" }}>
              <SubheaderList
                dimensions={dimensionsColumns}
                italicsInput={italics}
              />
            </ul>
            <p style={{ fontSize: "12px" }}>[where zero means "All"]</p>
            <p>
              Hitting "Apply" filters the chart to show a timeseries for both{" "}
              <span style={italics}>{metricsColumns[0]}</span> and{" "}
              <span style={italics}>{metricsColumns[1]}</span> for given{" "}
              <span style={italics}>{dimensionsColumns[0]}s</span> and{" "}
              <span style={italics}>{dimensionsColumns[1]}s</span> - logical AND
            </p>
          </div>
        </Bootstrap.Col>
      </Bootstrap.Row>
    </div>
  );
};
