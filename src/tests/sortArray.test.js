import { sortArray } from "../functions/sortArray";

test("sort array", () => {
  expect(
    sortArray([
      { Datasource: "Facebook Ads", Date: "01.02.2019" },
      { Datasource: "Facebook Ads", Date: "01.01.2019" }
    ])
  ).toStrictEqual([
    { Datasource: "Facebook Ads", Date: "01.01.2019" },
    { Datasource: "Facebook Ads", Date: "01.02.2019" }
  ]);
});
