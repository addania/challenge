import { handleChangeHelper } from "../functions/handleChangeHelper";
const selection = {
  Campaign: ["Like Ads"],
  Datasource: ["Facebook Ads"]
};
const selectionOutput = {
  Campaign: ["Like Ads"],
  Datasource: ["Facebook Ads", "Google Adwords"]
};
const selectionOutput2 = {
  Datasource: ["Facebook Ads", "Google Adwords"]
};
const selectionOutput3 = {
  Datasource: ["Facebook Ads"]
};
test("handle change helper", () => {
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "Datasource",
        value: ["Facebook Ads", "Google Adwords"]
      },
      selection
    )
  ).toStrictEqual(selectionOutput);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "Campaign",
        value: []
      },
      selectionOutput
    )
  ).toStrictEqual(selectionOutput2);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "Datasource",
        value: ["Facebook Ads"]
      },
      selectionOutput2
    )
  ).toStrictEqual(selectionOutput3);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "Campaign",
        value: ["Like Ads"]
      },
      selectionOutput3
    )
  ).toStrictEqual(selection);
});
