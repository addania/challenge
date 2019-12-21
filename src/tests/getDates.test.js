import { getDates } from "../functions/getDates";

test("get dates", () => {
  expect(
    getDates(
      {
        Datasource: "Facebook Ads",
        Campaign: "Like Ads",
        Date: new Date(),
        Clicks: 100,
        Impressions: 2000
      },
      ["Datasource", "Campaign", "Date", "Clicks", "Impressions"]
    )
  ).toStrictEqual(["Date"]);
});
