import Highcharts from "highcharts";

export function generateDataSetForHighCharts(impressions, clicks, title) {
  // Recives array of impressions, array of clicks and array of unique dates as input.
  // Outputs options to visualize data on a HighchartsReact component.
  const options = {
    chart: {
      type: "spline",
      zoomType: "x"
    },
    title: {
      text: title,
      align: "left"
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        day: "%e. %b"
      }
    },
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}",

          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        title: {
          text: "Clicks",
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: false
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: "Impressions",
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
          format: "{value}",
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        opposite: true
      }
    ],
    legend: {
      enabled: true
    },
    series: [
      {
        type: "line",
        name: "Clicks",
        data: clicks
      },
      {
        type: "line",
        name: "Impressions",
        yAxis: 1,
        data: impressions
      }
    ]
  };
  return options;
}
