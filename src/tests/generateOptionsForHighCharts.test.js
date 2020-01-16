import { generateOptionsForHighCharts } from "../functions/generateOptionsForHighCharts";
import Highcharts from "highcharts";

test("calculate Options", () => {
  expect(
    generateOptionsForHighCharts(
      [
        {
          Date: 1546300800000,
          Datasource: "Facebook Ads",
          Campaign: "Like Ads",
          Clicks: 274,
          Impressions: 1979
        },
        {
          Date: 1546300800000,
          Datasource: "Facebook Ads",
          Campaign: "Offer Campaigns - Conversions",
          Clicks: 10245,
          Impressions: 764627
        },
        {
          Date: 1546387200000,
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
          [1546300800000, 10519],
          [1546387200000, 7]
        ]
      },
      {
        type: "line",
        name: "Impressions",
        yAxis: 1,
        data: [
          [1546300800000, 766606],
          [1546387200000, 444]
        ]
      }
    ]
  });

  expect(
    generateOptionsForHighCharts(
      [
        {
          Date: 1546300800000,
          Datasource: "Facebook Ads",
          Campaign: "Like Ads",
          Clicks: 274,
          Impressions: 1979
        },
        {
          Date: 1546300800000,
          Datasource: "Facebook Ads",
          Campaign: "Offer Campaigns - Conversions",
          Clicks: 10245,
          Impressions: 764627
        },
        {
          Date: 1546387200000,
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
      type: "spline",
      zoomType: "x"
    },
    title: {
      text: 'Datasource "Facebook Ads" ; All Campaigns',
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
        data: [[1546300800000, 10519]]
      },
      {
        type: "line",
        name: "Impressions",
        yAxis: 1,
        data: [[1546300800000, 766606]]
      }
    ]
  });
});
