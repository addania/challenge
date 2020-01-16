import { getTitleList } from "../functions/getTitleList";

test("getTitleList", () => {
  expect(getTitleList(["Facebook Ads", "Google Adwords"])).toStrictEqual(
    '"Facebook Ads" and "Google Adwords" '
  );
});
