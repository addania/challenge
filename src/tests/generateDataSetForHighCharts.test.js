import { generateDataSetForHighCharts } from "../functions/generateDataSetForHighCharts";
import Highcharts from "highcharts";

test("generate Options", () => {
  expect(
    generateDataSetForHighCharts(
      [
        [1546300800000, 1724052],
        [1546387200000, 1955809]
      ],
      [
        [1546300800000, 24091],
        [1546387200000, 19479]
      ],
      "All Datasources; All Campaigns"
    )
  ).toStrictEqual({
    chart: {
      type: "spline",
      zoomType: "x"
    },
    title: {
      text: "All Datasources; All Campaigns",
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
        data: [
          [1546300800000, 24091],
          [1546387200000, 19479]
        ]
      },
      {
        type: "line",
        name: "Impressions",
        yAxis: 1,
        data: [
          [1546300800000, 1724052],
          [1546387200000, 1955809]
        ]
      }
    ]
  });
});
