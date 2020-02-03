import { generateFilterOptions } from "../functions/generateFilterOptions";

test("generate Options Filter", () => {
  expect(
    generateFilterOptions("datasource", [
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
    ])
  ).toStrictEqual([
    { key: "Facebook Ads", text: "Facebook Ads", value: "Facebook Ads" },
    { key: "Google Adwords", text: "Google Adwords", value: "Google Adwords" }
  ]);
  expect(
    generateFilterOptions("campaign", [
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
  expect(
    generateFilterOptions("campaign", [
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
        campaign: "Like Ads",
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
    ])
  ).toStrictEqual([
    { key: "Like Ads", text: "Like Ads", value: "Like Ads" },
    { key: "B2B - Leads", text: "B2B - Leads", value: "B2B - Leads" }
  ]);
});
