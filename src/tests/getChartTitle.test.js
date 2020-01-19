import { getChartTitle } from "../functions/getChartTitle";

test("generate message", () => {
  expect(
    getChartTitle({
      Datasource: ["Facebook Ads", "Google Adwords"],
      Campaign: ["Like Ads"]
    })
  ).toStrictEqual(
    'Datasource "Facebook Ads" and "Google Adwords" ; Campaign "Like Ads" '
  );
});
