import { formatImpressions } from "../functions/formatImpressions";

test("format Impressions", () => {
  expect(
    formatImpressions([
      { datasource: "Facebook Ads", impressions: "", clicks: "" }
    ])
  ).toStrictEqual([{ datasource: "Facebook Ads", impressions: 0, clicks: 0 }]);
  expect(
    formatImpressions([
      { datasource: "Facebook Ads", impressions: 123, clicks: 50 }
    ])
  ).toStrictEqual([
    { datasource: "Facebook Ads", impressions: 123, clicks: 50 }
  ]);
});
