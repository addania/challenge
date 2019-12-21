import { calculateAggregates } from "../functions/calculateAggregates";

test("calculate Aggregates", () => {
  expect(
    calculateAggregates([
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
    ])
  ).toStrictEqual([
    [766606, 444],
    [10519, 7],
    ["01. Jan", "02. Jan"]
  ]);
});
