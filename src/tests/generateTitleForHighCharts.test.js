import { generateTitleForHighCharts } from "../functions/generateTitleForHighCharts";

test("generate message", () => {
  expect(
    generateTitleForHighCharts({
      Datasource: ["Facebook Ads", "Google Adwords"],
      Campaign: ["Like Ads"]
    })
  ).toStrictEqual(
    'Datasource "Facebook Ads" and "Google Adwords" ; Campaign "Like Ads" '
  );
});
