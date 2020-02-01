import { parseData } from "../functions/parseData";

const data =
  "Date,Datasource,Campaign,Clicks,Impressions\n01.01.2019,Facebook Ads,Like Ads, 274,1979\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions,10245,764627\n";

test("parse data", () => {
  expect(parseData(data)[1]).toStrictEqual(["Clicks", "Impressions"]);
  expect(parseData(data)[2]).toStrictEqual(["Datasource", "Campaign"]);
  expect(parseData(data)[0]).toStrictEqual([
    {
      Date: 1546300800000,
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      Clicks: 274,
      Impressions: 1979
    },
    {
      Date: 1546300800000,
      Datasource: "Facebook Ads",
      Campaign: "Offer Campaigns - Conversions",
      Clicks: 10245,
      Impressions: 764627
    }
  ]);
});
