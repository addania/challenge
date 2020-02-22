import { getMetrics } from "../functions/getMetrics";

test("get metrics", () => {
  expect(
    getMetrics(
      {
        datasource: "Facebook Ads",
        date: "01.02.2019",
        clicks: 100,
        impressions: 2000
      },
      ["datasource", "date", "clicks", "impressions"]
    )
  ).toStrictEqual(["clicks", "impressions"]);
});
