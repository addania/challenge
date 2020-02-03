import { extractDate } from "../functions/extractDate";
test("format Date", () => {
  expect(
    extractDate([{ datasource: "Facebook Ads", date: "01.02.2019" }])[0].date
  ).toStrictEqual(1548979200000);
  expect(
    extractDate([{ datasource: "Facebook Ads", date: "01.01.2019" }])[0].date
  ).toBe(1546300800000);
  expect(
    extractDate([{ datasource: "Facebook Ads", date: "21.01.2019" }])[0].date
  ).toBe(1548028800000);
});
