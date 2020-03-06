import {
  generateChartOptions,
  filterArray,
  aggregate,
  generateChartAggregates,
  getChartTitle,
  getTitleList,
  getChartData
} from "../generateChartOptions";
import Highcharts from "highcharts";
import _ from "lodash";

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

test("filter Array", () => {
  expect(
    filterArray(
      {
        datasource: ["Facebook Ads", "Google Adwords"],
        campaign: ["Like Ads"]
      },
      [
        {
          date: "01. Jan",
          datasource: "Facebook Ads",
          campaign: "Like Ads",
          clicks: 274,
          impressions: 1979
        },
        {
          date: "01. Jan",
          datasource: "Facebook Ads",
          campaign: "Offer Campaigns - Conversions",
          clicks: 10245,
          impressions: 764627
        },
        {
          date: "01. Jan",
          datasource: "Google Adwords",
          campaign: "B2B - Leads",
          clicks: 7,
          impressions: 444
        }
      ]
    )
  ).toStrictEqual([
    {
      date: "01. Jan",
      datasource: "Facebook Ads",
      campaign: "Like Ads",
      clicks: 274,
      impressions: 1979
    }
  ]);
});

test("aggregate data", () => {
  expect(
    aggregate([
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
    ])
  ).toStrictEqual({
    impressions: {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 766606],
        [1546387200000, 444]
      ]
    },
    clicks: {
      type: "line",
      name: "Clicks",
      data: [
        [1546300800000, 10519],
        [1546387200000, 7]
      ]
    }
  });
});

test("generate chart aggregates", () => {
  const data = {
    1548979200000: [
      {
        date: 1548979200000,
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 274,
        impressions: 1979
      },
      {
        date: 1548979200000,
        datasource: "Facebook Ads",
        campaign: "Offer Campaigns - Conversions",
        clicks: 10245,
        impressions: 764627
      }
    ],
    1546300800000: [
      {
        date: 1546300800000,
        datasource: "Google Adwords",
        campaign: "B2B - Leads",
        clicks: 7,
        impressions: 444
      }
    ]
  };

  expect(generateChartAggregates(data, "impressions")).toStrictEqual([
    [1548979200000, 766606],
    [1546300800000, 444]
  ]);

  expect(generateChartAggregates(data, "clicks")).toStrictEqual([
    [1548979200000, 10519],
    [1546300800000, 7]
  ]);
});

test("generate message", () => {
  expect(
    getChartTitle({
      datasource: ["Facebook Ads", "Google Adwords"],
      campaign: ["Like Ads"]
    })
  ).toStrictEqual(
    'Datasource "Facebook Ads" and "Google Adwords" ; Campaign "Like Ads" '
  );
});

test("getTitleList", () => {
  expect(getTitleList(["Facebook Ads", "Google Adwords"])).toStrictEqual(
    '"Facebook Ads" and "Google Adwords" '
  );
});

test("generate Options", () => {
  expect(
    getChartData(
      {
        type: "line",
        name: "Impressions",
        yAxis: 1,
        data: [
          [1546300800000, 1724052],
          [1546387200000, 1955809]
        ]
      },
      {
        type: "line",
        name: "Clicks",
        data: [
          [1546300800000, 24091],
          [1546387200000, 19479]
        ]
      },
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
