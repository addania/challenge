import React from "react";
import ReactDOM from "react-dom";
import { Filters, generateFilterOptions } from "../Filters.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

const styles = {
  margin: "30px 0px",
  textAlign: "left",
  color: "#8DA1B9"
};

const dimensions = ["datasource", "campaigns"];

const data = [
  {
    date: "01. Jan",
    datasource: "Facebook Ads",
    campaign: "Like Ads",
    clicks: 274,
    impressions: 1979
  },
  {
    date: "01. Jan",
    datasource: "Facebook Ads",
    campaign: "Offer Campaigns - Conversions",
    clicks: 10245,
    impressions: 764627
  },
  {
    date: "01. Jan",
    datasource: "Google Adwords",
    campaign: "B2B - Leads",
    clicks: 7,
    impressions: 444
  }
];

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Filters
      styling={styles}
      filterColumns={dimensions}
      dataSet={data}
    ></Filters>,
    div
  );
});

it("renders filter correctly", () => {
  render(
    <Filters
      styling={styles}
      filterColumns={dimensions}
      dataSet={data}
    ></Filters>
  );
});

it("renders filter correctly", () => {
  const { getByTestId } = render(
    <Filters
      styling={styles}
      filterColumns={dimensions}
      dataSet={data}
    ></Filters>
  );
  expect(getByTestId("filter")).toHaveTextContent("Filters");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Filters
        styling={styles}
        filterColumns={dimensions}
        dataSet={data}
      ></Filters>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("generate Options Filter", () => {
  expect(
    generateFilterOptions("datasource", [
      {
        date: "01. Jan",
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 274,
        impressions: 1979
      },
      {
        date: "01. Jan",
        datasource: "Facebook Ads",
        campaign: "Offer Campaigns - Conversions",
        clicks: 10245,
        impressions: 764627
      },
      {
        date: "01. Jan",
        datasource: "Google Adwords",
        campaign: "B2B - Leads",
        clicks: 7,
        impressions: 444
      }
    ])
  ).toStrictEqual([
    { key: "Facebook Ads", text: "Facebook Ads", value: "Facebook Ads" },
    { key: "Google Adwords", text: "Google Adwords", value: "Google Adwords" }
  ]);
  expect(
    generateFilterOptions("campaign", [
      {
        date: "01. Jan",
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 274,
        impressions: 1979
      },
      {
        date: "01. Jan",
        datasource: "Facebook Ads",
        campaign: "Offer Campaigns - Conversions",
        clicks: 10245,
        impressions: 764627
      },
      {
        date: "01. Jan",
        datasource: "Google Adwords",
        campaign: "B2B - Leads",
        clicks: 7,
        impressions: 444
      }
    ])
  ).toStrictEqual([
    { key: "Like Ads", text: "Like Ads", value: "Like Ads" },
    {
      key: "Offer Campaigns - Conversions",
      text: "Offer Campaigns - Conversions",
      value: "Offer Campaigns - Conversions"
    },
    { key: "B2B - Leads", text: "B2B - Leads", value: "B2B - Leads" }
  ]);
  expect(
    generateFilterOptions("campaign", [
      {
        date: "01. Jan",
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 274,
        impressions: 1979
      },
      {
        date: "01. Jan",
        datasource: "Facebook Ads",
        campaign: "Like Ads",
        clicks: 10245,
        impressions: 764627
      },
      {
        date: "01. Jan",
        datasource: "Google Adwords",
        campaign: "B2B - Leads",
        clicks: 7,
        impressions: 444
      }
    ])
  ).toStrictEqual([
    { key: "Like Ads", text: "Like Ads", value: "Like Ads" },
    { key: "B2B - Leads", text: "B2B - Leads", value: "B2B - Leads" }
  ]);
});
