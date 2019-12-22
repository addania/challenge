import { handleChangeHelper } from "../functions/handleChangeHelper";
const selection = {
  Campaign: ["Like Ads"],
  Datasource: ["Facebook Ads", "Google Adwords"]
};
const selection2 = {};
test("handle change helper", () => {
  expect(
    handleChangeHelper(
      0,
      [
        {
          Campaign: "Like Ads",
          Clicks: 274,
          Datasource: "Facebook Ads",
          Date: "01.01.2019",
          Impressions: 1979
        },
        {
          Campaign: "Offer Campaigns – Conversions",
          Clicks: 10245,
          Datasource: "Facebook Ads",
          Date: "01.01.2019",
          Impressions: 764627
        }
      ],
      selection
    )
  ).toStrictEqual(selection);
  expect(
    handleChangeHelper(
      0,
      [
        {
          Campaign: "Like Ads",
          Clicks: 274,
          Datasource: "Facebook Ads",
          Date: "01.01.2019",
          Impressions: 1979
        },
        {
          Campaign: "Offer Campaigns – Conversions",
          Clicks: 10245,
          Datasource: "Facebook Ads",
          Date: "01.01.2019",
          Impressions: 764627
        }
      ],
      selection2
    )
  ).toStrictEqual(selection2);
});
