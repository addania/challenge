import { aggregate } from "../functions/aggregate";

test("aggregate data", () => {
  expect(
    aggregate([
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
        date: "02. Jan",
        datasource: "Google Adwords",
        campaign: "B2B - Leads",
        clicks: 7,
        impressions: 444
      }
    ])
  ).toStrictEqual({
    impressions: [766606, 444],
    clicks: [10519, 7],
    dates: ["01. Jan", "02. Jan"]
  });
});
