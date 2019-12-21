import { formatDate } from "../functions/formatDate";

test("format date", () => {
  expect(
    formatDate([
      {
        Datasource: "Facebook Ads",
        Campaign: "Like Ads",
        Date: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        Clicks: 100,
        Impressions: 2000
      }
    ])
  ).toStrictEqual([
    {
      Datasource: "Facebook Ads",
      Campaign: "Like Ads",
      Date: "20. Dec",
      Clicks: 100,
      Impressions: 2000
    }
  ]);
});
