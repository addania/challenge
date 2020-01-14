import { generateOptionsForHighCharts } from "../functions/generateOptionsForHighCharts";
import Highcharts from "highcharts";

test("calculate Options", () => {
  expect(
    generateOptionsForHighCharts(
      [
        {
          Date: "01. Jan",
          Datasource: "Facebook Ads",
          Campaign: "Like Ads",
          Clicks: 274,
          Impressions: 1979
        },
        {
          Date: "01. Jan",
          Datasource: "Facebook Ads",
          Campaign: "Offer Campaigns - Conversions",
          Clicks: 10245,
          Impressions: 764627
        },
        {
          Date: "02. Jan",
          Datasource: "Google Adwords",
          Campaign: "B2B - Leads",
          Clicks: 7,
          Impressions: 444
        }
      ],
      0,
      false
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

  expect(
    generateOptionsForHighCharts(
      [
        {
          Date: "01. Jan",
          Datasource: "Facebook Ads",
          Campaign: "Like Ads",
          Clicks: 274,
          Impressions: 1979
        },
        {
          Date: "01. Jan",
          Datasource: "Facebook Ads",
          Campaign: "Offer Campaigns - Conversions",
          Clicks: 10245,
          Impressions: 764627
        },
        {
          Date: "02. Jan",
          Datasource: "Google Adwords",
          Campaign: "B2B - Leads",
          Clicks: 7,
          Impressions: 444
        }
      ],
      { Datasource: ["Facebook Ads"] },
      true
    )
  ).toStrictEqual({
    chart: {
      type: "spline"
    },
    xAxis: {
      categories: ["01. Jan"]
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
      text: 'Datasource "Facebook Ads" ; All Campaigns',
      align: "left"
    },
    series: [
      {
        name: "Clicks",

        data: [10519]
      },

      {
        name: "Impressions",
        yAxis: 1,

        data: [766606]
      }
    ]
  });
});
