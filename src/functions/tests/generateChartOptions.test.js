import { generateChartOptions } from "../generateChartOptions";
import Highcharts from "highcharts";
import _ from "lodash";

const data = [
  {
    date: 1546300800000,
    datasource: "Facebook Ads",
    campaign: "Like Ads",
    clicks: 100,
    impressions: 200
  },
  {
    date: 1546300800000,
    datasource: "Facebook Ads",
    campaign: "Offer Campaigns - Conversions",
    clicks: 300,
    impressions: 400
  },
  {
    date: 1546300800000,
    datasource: "Google Adwords",
    campaign: "B2B - Leads",
    clicks: 500,
    impressions: 600
  },
  {
    date: 1546300800000,
    datasource: "Google Adwords",
    campaign: "GDN Prospecting - App - Prio",
    clicks: 700,
    impressions: 800
  },
  {
    date: 1546387200000,
    datasource: "Facebook Ads",
    campaign: "Like Ads",
    clicks: 1100,
    impressions: 1200
  },
  {
    date: 1546387200000,
    datasource: "Facebook Ads",
    campaign: "Offer Campaigns - Conversions",
    clicks: 1300,
    impressions: 1400
  },
  {
    date: 1546387200000,
    datasource: "Google Adwords",
    campaign: "B2B - Leads",
    clicks: 1500,
    impressions: 1600
  },
  {
    date: 1546387200000,
    datasource: "Google Adwords",
    campaign: "GDN Prospecting - App - Prio",
    clicks: 1700,
    impressions: 1800
  }
];

const data2 = [
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
];

test("calculate Options", () => {
  expect(generateChartOptions(data2, 0, false)).toStrictEqual({
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
    generateChartOptions(data2, { datasource: ["Facebook Ads"] }, true)
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

expect(
  generateChartOptions(data, { datasource: ["Facebook Ads"] }, true)
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
      data: [
        [1546300800000, 400],
        [1546387200000, 2400]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 600],
        [1546387200000, 2600]
      ]
    }
  ]
});

expect(
  generateChartOptions(data, { datasource: ["Google Adwords"] }, true)
).toStrictEqual({
  chart: {
    type: "spline",
    zoomType: "x"
  },
  title: {
    text: 'Datasource "Google Adwords" ; All Campaigns',
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
        [1546300800000, 1200],
        [1546387200000, 3200]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 1400],
        [1546387200000, 3400]
      ]
    }
  ]
});

expect(
  generateChartOptions(
    data,
    { datasource: ["Google Adwords", "Facebook Ads"] },
    true
  )
).toStrictEqual({
  chart: {
    type: "spline",
    zoomType: "x"
  },
  title: {
    text: 'Datasource "Google Adwords" and "Facebook Ads" ; All Campaigns',
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
        [1546300800000, 1600],
        [1546387200000, 5600]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 2000],
        [1546387200000, 6000]
      ]
    }
  ]
});

expect(
  generateChartOptions(data, { campaign: ["Like Ads"] }, true)
).toStrictEqual({
  chart: {
    type: "spline",
    zoomType: "x"
  },
  title: {
    text: 'All Datasources; Campaign "Like Ads" ',
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
        [1546300800000, 100],
        [1546387200000, 1100]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 200],
        [1546387200000, 1200]
      ]
    }
  ]
});

expect(
  generateChartOptions(data, { campaign: ["Like Ads", "B2B - Leads"] }, true)
).toStrictEqual({
  chart: {
    type: "spline",
    zoomType: "x"
  },
  title: {
    text: 'All Datasources; Campaign "Like Ads" and "B2B - Leads" ',
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
        [1546300800000, 600],
        [1546387200000, 2600]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 800],
        [1546387200000, 2800]
      ]
    }
  ]
});

expect(
  generateChartOptions(
    data,
    {
      campaign: ["Like Ads", "B2B - Leads"],
      datasource: ["Google Adwords", "Facebook Ads"]
    },
    true
  )
).toStrictEqual({
  chart: {
    type: "spline",
    zoomType: "x"
  },
  title: {
    text:
      'Datasource "Google Adwords" and "Facebook Ads" ; Campaign "Like Ads" and "B2B - Leads" ',
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
        [1546300800000, 600],
        [1546387200000, 2600]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 800],
        [1546387200000, 2800]
      ]
    }
  ]
});

expect(
  generateChartOptions(
    data,
    {
      campaign: ["Like Ads"],
      datasource: ["Google Adwords", "Facebook Ads"]
    },
    true
  )
).toStrictEqual({
  chart: {
    type: "spline",
    zoomType: "x"
  },
  title: {
    text:
      'Datasource "Google Adwords" and "Facebook Ads" ; Campaign "Like Ads" ',
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
        [1546300800000, 100],
        [1546387200000, 1100]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 200],
        [1546387200000, 1200]
      ]
    }
  ]
});

expect(
  generateChartOptions(
    data,
    {
      campaign: ["Like Ads"],
      datasource: ["Google Adwords", "Facebook Ads"]
    },
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
        [1546300800000, 1600],
        [1546387200000, 5600]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 2000],
        [1546387200000, 6000]
      ]
    }
  ]
});

expect(
  generateChartOptions(
    data,
    {
      campaign: ["Like Ads"],
      datasource: ["Google Adwords", "Facebook Ads"]
    },
    0
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
        [1546300800000, 1600],
        [1546387200000, 5600]
      ]
    },
    {
      type: "line",
      name: "Impressions",
      yAxis: 1,
      data: [
        [1546300800000, 2000],
        [1546387200000, 6000]
      ]
    }
  ]
});
