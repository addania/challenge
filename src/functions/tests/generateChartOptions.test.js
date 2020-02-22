import { generateChartOptions } from "../functions/generateChartOptions";
import Highcharts from "highcharts";

test("calculate Options", () => {
  expect(
    generateChartOptions(
      [
        {
          date: 1546300800000,
          datasource: "Facebook Ads",
          campaign: "Like Ads",
          clicks: 274,
          impressions: 1979
        },
        {
          date: 1546300800000,
          datasource: "Facebook Ads",
          campaign: "Offer Campaigns - Conversions",
          clicks: 10245,
          impressions: 764627
        },
        {
          date: 1546387200000,
          datasource: "Google Adwords",
          campaign: "B2B - Leads",
          clicks: 7,
          impressions: 444
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
    generateChartOptions(
      [
        {
          date: 1546300800000,
          datasource: "Facebook Ads",
          campaign: "Like Ads",
          clicks: 274,
          impressions: 1979
        },
        {
          date: 1546300800000,
          datasource: "Facebook Ads",
          campaign: "Offer Campaigns - Conversions",
          clicks: 10245,
          impressions: 764627
        },
        {
          date: 1546387200000,
          datasource: "Google Adwords",
          campaign: "B2B - Leads",
          clicks: 7,
          impressions: 444
        }
      ],
      { datasource: ["Facebook Ads"] },
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
