import React from 'react';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from "./List.js"

export function Subheader(props) {
  const message ="Select zero to N ";
  //const columnsArray= ["Datasources", "Campaigns", "Impressions", "Clicks", "Date"];
  const italics={fontStyle: "italic"};
  
  return (
    <div>
      <Row>
          <Col sm={12}>
            <div style=
              {{
                margin: "30px 0px", 
                textAlign: "left", 
                color:"#828282",
                fontSize: "18px", 
                borderBottom: "0.5px solid #E8E8EA", 
                paddingBottom: "20px"
              }}>
                <ul style={{paddingLeft: "20px"}}>
                  <List message={message} columns={props.dimensionsColumns[0]} styling={italics}/>
                  <List message={message} columns={props.dimensionsColumns[1]} styling={italics}/>
                </ul>
                <p style= {{fontSize: "12px"}} >
                  [where zero means "All"] 
                </p>
                <p>
                  Hitting "Apply" filters the chart to show a timeseries for both <span style={italics}>{props.metricsColumns[0]}</span> and <span style={italics}>{props.metricsColumns[1]}</span> for given <span style={italics}>{props.dimensionsColumns[0]}s</span> and <span style={italics}>{props.dimensionsColumns[1]}s</span> - logical AND
                </p>
            </div>
          </Col>
      </Row>
    </div>
  );
}

