import { parseData } from "../parseData";

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
