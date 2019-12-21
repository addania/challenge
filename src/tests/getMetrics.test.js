import { getMetrics } from "../functions/getMetrics";

test("get metrics", () => {
  expect(
    getMetrics(
      {
        Datasource: "Facebook Ads",
        Date: "01.02.2019",
        Clicks: 100,
        Impressions: 2000
      },
      ["Datasource", "Date", "Clicks", "Impressions"]
    )
  ).toStrictEqual(["Clicks", "Impressions"]);
});
