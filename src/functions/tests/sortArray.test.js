import { sortArray } from "../functions/sortArray";

test("sort array", () => {
  expect(
    sortArray([
      { datasource: "Facebook Ads", date: "01.02.2019" },
      { datasource: "Facebook Ads", date: "01.01.2019" }
    ])
  ).toStrictEqual([
    { datasource: "Facebook Ads", date: "01.01.2019" },
    { datasource: "Facebook Ads", date: "01.02.2019" }
  ]);
});
