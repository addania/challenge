import { aggregate } from "../functions/aggregate";

test("aggregate data", () => {
  expect(
    aggregate([
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
  ).toStrictEqual({
    impressions: [766606, 444],
    clicks: [10519, 7],
    dates: ["01. Jan", "02. Jan"]
  });
});
