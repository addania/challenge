import { getChartTitle } from "../functions/getChartTitle";

test("generate message", () => {
  expect(
    getChartTitle({
      datasource: ["Facebook Ads", "Google Adwords"],
      campaign: ["Like Ads"]
    })
  ).toStrictEqual(
    'Datasource "Facebook Ads" and "Google Adwords" ; Campaign "Like Ads" '
  );
});
