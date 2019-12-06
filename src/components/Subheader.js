import React from 'react';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from "./List.js"

export function Subheader() {
  const message ="Select zero to N ";
  const columnsArray= ["Datasources", "Campaigns", "Impressions", "Clicks", "Date"];
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
                  <List message={message} columns={columnsArray[0]} styling={italics}/>
                  <List message={message} columns={columnsArray[1]} styling={italics}/>
                </ul>
                <p style= {{fontSize: "12px"}} >
                  [where zero means "All"]
                </p>
                <p>
                  Hitting "Apply" filters the chart to show a timeseries for both <span style={italics}>Clicks</span> and <span style={italics}>Impressions</span> for given <span style={italics}>{columnsArray[0]}</span> and <span style={italics}>{columnsArray[1]}</span> - logical AND
                </p>
            </div>
          </Col>
      </Row>
    </div>
  );
}

