import Highcharts from "highcharts";

export function generateOptions(
  impressionsForOptions,
  clicksForOptions,
  datesForOptions,
  messageForOptions
) {
  // Recives array of impressions, array of clicks and array of unique dates as input.
  // Outputs options to visualize data on a HighchartsReact component.
  const options = {
    chart: {
      type: "spline"
    },
    xAxis: {
      categories: datesForOptions
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
      text: messageForOptions,
      align: "left"
    },
    series: [
      {
        name: "Clicks",

        data: clicksForOptions
      },

      {
        name: "Impressions",
        yAxis: 1,

        data: impressionsForOptions
      }
    ]
  };
  return options;
}
