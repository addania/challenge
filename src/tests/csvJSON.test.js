import { csvJSON } from "../functions/csvJSON";

test("parse CSV to JSON", () => {
  expect(
    csvJSON(
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
