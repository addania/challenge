import { generateList } from "../functions/generateList";

test("generateList", () => {
  expect(generateList(["Facebook Ads", "Google Adwords"])).toStrictEqual(
    '"Facebook Ads" and "Google Adwords" '
  );
});
