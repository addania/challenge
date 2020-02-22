import { formatMetrics } from "../functions/formatMetrics";

test("format metrics", () => {
  expect(
    formatMetrics([{ datasource: "Facebook Ads", impressions: "", clicks: "" }])
  ).toStrictEqual([{ datasource: "Facebook Ads", impressions: 0, clicks: 0 }]);
  expect(
    formatMetrics([
      { datasource: "Facebook Ads", impressions: 123, clicks: 50 }
    ])
  ).toStrictEqual([
    { datasource: "Facebook Ads", impressions: 123, clicks: 50 }
  ]);
});
