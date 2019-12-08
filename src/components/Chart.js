import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export function Chart({onClick, coreData, styling }) {
  
  function handleChange(){
    return 0
  };
 

  const options = {
    chart: {
    type: 'spline'
    },
    xAxis: {
      categories: coreData,
     
    },    
    yAxis:[{ // Primary yAxis
        labels: {
            format: '{value}',
            
            style: {
                color: Highcharts.getOptions().colors[0]
            },
        },
        title: {
            text: 'Clicks',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: false

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Impressions',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
       opposite: true
    }, ],

    title: {
      text: 'Datasources', 
      align: 'left'
    },
    series: [
    { 
        name: "Clicks",
        
        data: [12, 4, 3, 4, 4]
      },
   
      { 
        name: "Impressions",
        yAxis: 1,
        
        data: [10, 20, 30, 40, 30]
      },
   ]
  };

  return (
    <div >
      <Row >
      <Col sm={10}>
      <h2 style={styling}>Chart</h2>
      </Col>
      <Col sm={2}>
       <button
              type="submit"  
              style={{
                backgroundColor: "#8DA1B9",
                color: "white",
                borderRadius: "2px",
                width: "80px",
                padding: "5px 0px",
                position: "left",
                marginTop: "10px",
                position: "absolute",
                right:    0,
                bottom:   0,
              }}
            >
              <span onClick={onClick}>Reset</span>
            </button>
            </Col>
            </Row>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}