import { extractDate } from "../functions/extractDate";
test("format Date", () => {
  expect(
    extractDate([{ Datasource: "Facebook Ads", Date: "01.02.2019" }])[0].Date
  ).toStrictEqual(1548979200000);
  expect(
    extractDate([{ Datasource: "Facebook Ads", Date: "01.01.2019" }])[0].Date
  ).toBe(1546300800000);
  expect(
    extractDate([{ Datasource: "Facebook Ads", Date: "21.01.2019" }])[0].Date
  ).toBe(1548028800000);
});
