import { handleChangeHelper } from "../functions/handleChangeHelper";

const selection = {
  campaign: ["Like Ads"],
  datasource: ["Facebook Ads"]
};
const selectionOutput = {
  campaign: ["Like Ads"],
  datasource: ["Facebook Ads", "Google Adwords"]
};
const selectionOutput2 = {
  datasource: ["Facebook Ads", "Google Adwords"]
};
const selectionOutput3 = {
  datasource: ["Facebook Ads"]
};

test("handle change helper", () => {
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "datasource",
        value: ["Facebook Ads", "Google Adwords"]
      },
      selection
    )
  ).toStrictEqual(selectionOutput);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "campaign",
        value: []
      },
      selectionOutput
    )
  ).toStrictEqual(selectionOutput2);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "datasource",
        value: ["Facebook Ads"]
      },
      selectionOutput2
    )
  ).toStrictEqual(selectionOutput3);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "campaign",
        value: ["Like Ads"]
      },
      selectionOutput3
    )
  ).toStrictEqual(selection);
});
