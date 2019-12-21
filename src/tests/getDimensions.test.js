import { getDimensions } from "../functions/getDimensions";

test("get dimensions", () => {
  expect(
    getDimensions(
      {
        Datasource: "Facebook Ads",
        Campaign: "Like Ads",
        Clicks: 100,
        Impressions: 2000
      },
      ["Datasource", "Campaign", "Clicks", "Impressions"]
    )
  ).toStrictEqual(["Datasource", "Campaign"]);
});
