import { generateDataSetForHighCharts } from "../functions/generateDataSetForHighCharts";
import Highcharts from "highcharts";

test("generate Options", () => {
  expect(
    generateDataSetForHighCharts(
      [766606, 444],
      [10519, 7],
      ["01. Jan", "02. Jan"],
      "All Datasources; All Campaigns"
    )
  ).toStrictEqual({
    chart: {
      type: "spline"
    },
    xAxis: {
      categories: ["01. Jan", "02. Jan"]
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

    title: {
      text: "All Datasources; All Campaigns",
      align: "left"
    },
    series: [
      {
        name: "Clicks",

        data: [10519, 7]
      },

      {
        name: "Impressions",
        yAxis: 1,

        data: [766606, 444]
      }
    ]
  });
});
