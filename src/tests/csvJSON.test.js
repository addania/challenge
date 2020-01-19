import { csvJSON } from "../functions/csvJSON";

test("parse CSV to JSON", () => {
  expect(csvJSON("Datasource\nFacebook Ads\nAdwords\n")).toStrictEqual([
    { Datasource: "Facebook Ads" },
    { Datasource: "Adwords" }
  ]);
  expect(
    csvJSON("Datasource,Clicks\nFacebook Ads,274\nFacebook Ads,10245\n")
  ).toStrictEqual([
    { Datasource: "Facebook Ads", Clicks: "274" },
    { Datasource: "Facebook Ads", Clicks: "10245" }
  ]);
});
