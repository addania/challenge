import { extractDate } from "../functions/extractDate";
test("format Date", () => {
  expect(
    extractDate([
      { Datasource: "Facebook Ads", Date: "01.02.2019" }
    ])[0].Date.getMonth()
  ).toStrictEqual(1);
  expect(
    extractDate([
      { Datasource: "Facebook Ads", Date: "01.01.2019" }
    ])[0].Date.getDay()
  ).toBe(2);
  expect(
    extractDate([
      { Datasource: "Facebook Ads", Date: "21.01.2019" }
    ])[0].Date.getDate()
  ).toBe(21);
  expect(
    extractDate([
      { Datasource: "Facebook Ads", Date: "21.01.2019" }
    ])[0].Date.getFullYear()
  ).toBe(2019);
});
