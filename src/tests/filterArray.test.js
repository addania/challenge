import { filterArray } from "../functions/filterArray";

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
