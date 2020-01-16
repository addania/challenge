import { generateTitleList } from "../functions/generateTitleList";

test("generateTitleList", () => {
  expect(generateTitleList(["Facebook Ads", "Google Adwords"])).toStrictEqual(
    '"Facebook Ads" and "Google Adwords" '
  );
});
