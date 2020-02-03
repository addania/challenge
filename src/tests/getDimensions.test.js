import { getDimensions } from "../functions/getDimensions";

test("get dimensions", () => {
  expect(
    getDimensions(
      {
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 100,
        impressions: 2000
      },
      ["datasource", "campaign", "clicks", "impressions"]
    )
  ).toStrictEqual(["datasource", "campaign"]);
});
