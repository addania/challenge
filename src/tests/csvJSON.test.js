import { csvJSON } from "../functions/csvJSON";

test("parse CSV to JSON", () => {
  expect(
    csvJSON(
      "Date,Datasource,Campaign,Clicks,Impression\n01.01.2019,Facebook Ads,Like Ads,274,1979\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions,10245,764627\n"
    )
  ).toStrictEqual([
    {
      Date: "01.01.2019",
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      Clicks: 274,
      Impressions: 1979
    },
    {
      Date: "01.01.2019",
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      Clicks: 10245,
      Impressions: 764627
    }
  ]);
});
