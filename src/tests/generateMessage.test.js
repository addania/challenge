import { generateMessage } from "../functions/generateMessage";

test("generate message", () => {
  expect(
    generateMessage({
      Datasource: ["Facebook Ads", "Google Adwords"],
      Campaign: ["Like Ads"]
    })
  ).toStrictEqual(
    'Datasource "Facebook Ads" and "Google Adwords" ; Campaign "Like Ads" '
  );
});
