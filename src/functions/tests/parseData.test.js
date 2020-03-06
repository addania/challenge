import { parseData } from "../parseData";

const data =
  "Date,Datasource,Campaign,Clicks,Impressions\n01.01.2019,Facebook Ads,Like Ads, 274,1979\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions,10245,764627\n";

const data2 =
  "Date,Datasource,Campaign,Clicks,Impressions\n01.01.2019,Facebook Ads,Like Ads, '',''\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions,'',''\n";

const data3 =
  "Date,Datasource,Campaign,Clicks,Impressions\n02.01.2019,Facebook Ads,Offer Campaigns - Conversions, '',''\n02.01.2019,Facebook Ads,Like Ads,'',''\n01.01.2019,Facebook Ads,Offer Campaigns - Conversions, 100,200\n01.01.2019,Facebook Ads,Like Ads, 300,400\n02.01.2019,Google Adwords,GDN Prospecting - App - Prio, 700,800\n02.01.2019,Google Adwords,B2B - Leads, 900,1000\n01.01.2019,Google Adwords,GDN Prospecting - App - Prio, 500,600\n01.01.2019,Google Adwords,B2B - Leads, 1100,1200\n";

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
  expect(parseData(data2).metrics).toStrictEqual(["clicks", "impressions"]);
  expect(parseData(data2).dimensions).toStrictEqual(["datasource", "campaign"]);
  expect(parseData(data2).sortedData).toStrictEqual([
    {
      date: 1546300800000,
      datasource: "Facebook Ads",
      campaign: "Like Ads",
      clicks: 0,
      impressions: 0
    },
    {
      date: 1546300800000,
      datasource: "Facebook Ads",
      campaign: "Offer Campaigns - Conversions",
      clicks: 0,
      impressions: 0
    }
  ]);
  expect(parseData(data3).metrics).toStrictEqual(["clicks", "impressions"]);
  expect(parseData(data3).dimensions).toStrictEqual(["datasource", "campaign"]);
  expect(parseData(data3).sortedData).toStrictEqual([
    {
      date: 1546300800000,
      datasource: "Facebook Ads",
      campaign: "Like Ads",
      clicks: 300,
      impressions: 400
    },
    {
      date: 1546300800000,
      datasource: "Facebook Ads",
      campaign: "Offer Campaigns - Conversions",
      clicks: 100,
      impressions: 200
    },
    {
      date: 1546300800000,
      datasource: "Google Adwords",
      campaign: "B2B - Leads",
      clicks: 1100,
      impressions: 1200
    },
    {
      date: 1546300800000,
      datasource: "Google Adwords",
      campaign: "GDN Prospecting - App - Prio",
      clicks: 500,
      impressions: 600
    },
    {
      date: 1546387200000,
      datasource: "Facebook Ads",
      campaign: "Like Ads",
      clicks: 0,
      impressions: 0
    },
    {
      date: 1546387200000,
      datasource: "Facebook Ads",
      campaign: "Offer Campaigns - Conversions",
      clicks: 0,
      impressions: 0
    },
    {
      date: 1546387200000,
      datasource: "Google Adwords",
      campaign: "B2B - Leads",
      clicks: 900,
      impressions: 1000
    },
    {
      date: 1546387200000,
      datasource: "Google Adwords",
      campaign: "GDN Prospecting - App - Prio",
      clicks: 700,
      impressions: 800
    }
  ]);
});
