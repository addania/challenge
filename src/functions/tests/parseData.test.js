import {
  parseData,
  parseCsv,
  formatMetrics,
  extractDate,
  sortArray,
  getColumns,
  getMetrics,
  getDimensions
} from "../parseData";

const data =
  "Date,Datasource,Campaign,Clicks,Impressions\n01.01.2019,Facebook Ads,Like Ads, 274,1979\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions,10245,764627\n";

test("parse data", () => {
  expect(parseData(data).metrics).toStrictEqual(["clicks", "impressions"]);
  expect(parseData(data).dimensions).toStrictEqual(["datasource", "campaign"]);
  expect(parseData(data).sortedData).toStrictEqual([
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
    }
  ]);
});

test("parse CSV to JSON", () => {
  expect(
    parseCsv(
      "Date,Datasource,Campaign,Clicks,Impression\n01.01.2019,Facebook Ads,Like Ads,274,1979\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions,10245,764627\n"
    )
  ).toStrictEqual([
    {
      date: "01.01.2019",
      datasource: "Facebook Ads",
      campaign: "Like Ads",
      clicks: 274,
      impressions: 1979
    },
    {
      date: "01.01.2019",
      datasource: "Facebook Ads",
      campaign: "Offer Campaigns - Conversions",
      clicks: 10245,
      impressions: 764627
    }
  ]);
});

test("format metrics", () => {
  expect(
    formatMetrics([{ datasource: "Facebook Ads", impressions: "", clicks: "" }])
  ).toStrictEqual([{ datasource: "Facebook Ads", impressions: 0, clicks: 0 }]);
  expect(
    formatMetrics([
      { datasource: "Facebook Ads", impressions: 123, clicks: 50 }
    ])
  ).toStrictEqual([
    { datasource: "Facebook Ads", impressions: 123, clicks: 50 }
  ]);
});

test("format Date", () => {
  expect(
    extractDate([{ datasource: "Facebook Ads", date: "01.02.2019" }])[0].date
  ).toStrictEqual(1548979200000);
  expect(
    extractDate([{ datasource: "Facebook Ads", date: "01.01.2019" }])[0].date
  ).toBe(1546300800000);
  expect(
    extractDate([{ datasource: "Facebook Ads", date: "21.01.2019" }])[0].date
  ).toBe(1548028800000);
});

test("sort array", () => {
  expect(
    sortArray([
      { datasource: "Facebook Ads", date: "01.02.2019" },
      { datasource: "Facebook Ads", date: "01.01.2019" }
    ])
  ).toStrictEqual([
    { datasource: "Facebook Ads", date: "01.01.2019" },
    { datasource: "Facebook Ads", date: "01.02.2019" }
  ]);
});

test("get columns", () => {
  expect(
    getColumns({ datasource: "Facebook Ads", date: "01.02.2019" })
  ).toStrictEqual(["datasource", "date"]);
});

test("get metrics", () => {
  expect(
    getMetrics(
      {
        datasource: "Facebook Ads",
        date: "01.02.2019",
        clicks: 100,
        impressions: 2000
      },
      ["datasource", "date", "clicks", "impressions"]
    )
  ).toStrictEqual(["clicks", "impressions"]);
});

test("get dimensions", () => {
  expect(
    getDimensions(
      {
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 100,
        impressions: 2000
      },
      ["datasource", "campaign", "clicks", "impressions"]
    )
  ).toStrictEqual(["datasource", "campaign"]);
});
