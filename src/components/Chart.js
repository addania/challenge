import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function Chart(props) {
  
  function handleChange(){
    return 0
  };
 

  const options = {
    chart: {
    type: 'spline'
    },
    xAxis: {
      categories: props.data,
     
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
    <div>
      <h2 style={props.styling}>Chart</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}