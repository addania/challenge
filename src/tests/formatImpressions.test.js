import { formatImpressions } from "../functions/formatImpressions";

test("format Impressions", () => {
  expect(
    formatImpressions([
      { Datasource: "Facebook Ads", Impressions: "", Clicks: "" }
    ])
  ).toStrictEqual([{ Datasource: "Facebook Ads", Impressions: 0, Clicks: 0 }]);
  expect(
    formatImpressions([
      { Datasource: "Facebook Ads", Impressions: 123, Clicks: 50 }
    ])
  ).toStrictEqual([
    { Datasource: "Facebook Ads", Impressions: 123, Clicks: 50 }
  ]);
});
