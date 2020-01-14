import { generateOptionsForFilter } from "../functions/generateOptionsForFilter";

test("generate Options Filter", () => {
  expect(
    generateOptionsForFilter("Datasource", [
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
    ])
  ).toStrictEqual([
    { key: "Facebook Ads", text: "Facebook Ads", value: "Facebook Ads" },
    { key: "Google Adwords", text: "Google Adwords", value: "Google Adwords" }
  ]);
  expect(
    generateOptionsForFilter("Campaign", [
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
    ])
  ).toStrictEqual([
    { key: "Like Ads", text: "Like Ads", value: "Like Ads" },
    {
      key: "Offer Campaigns - Conversions",
      text: "Offer Campaigns - Conversions",
      value: "Offer Campaigns - Conversions"
    },
    { key: "B2B - Leads", text: "B2B - Leads", value: "B2B - Leads" }
  ]);
});
