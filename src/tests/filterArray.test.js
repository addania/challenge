import { filterArray } from "../functions/filterArray";

test("filter Array", () => {
  expect(
    filterArray(
      {
        Datasource: ["Facebook Ads", "Google Adwords"],
        Campaign: ["Like Ads"]
      },
      [
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
          Date: "01. Jan",
          Datasource: "Google Adwords",
          Campaign: "B2B - Leads",
          Clicks: 7,
          Impressions: 444
        }
      ]
    )
  ).toStrictEqual([
    {
      Date: "01. Jan",
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      Clicks: 274,
      Impressions: 1979
    }
  ]);
});
