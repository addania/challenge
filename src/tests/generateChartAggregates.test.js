import { generateChartAggregates } from "../functions/generateChartAggregates";

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
