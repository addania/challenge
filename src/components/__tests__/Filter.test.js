import React from "react";
import ReactDOM from "react-dom";
import { Filter } from "../Filter.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

const styles = {
  margin: "30px 0px",
  textAlign: "left",
  color: "#8DA1B9"
};

const dimensions = ["Datasource", "Campaigns"];

const data = [
  {
    Date: "01. Jan",
    Datasource: "Facebook Ads",
    Campaign: "Like Ads",
    Clicks: 274,
    Impressions: 1979
  },
  {
    Date: "01. Jan",
    Datasource: "Facebook Ads",
    Campaign: "Offer Campaigns - Conversions",
    Clicks: 10245,
    Impressions: 764627
  },
  {
    Date: "01. Jan",
    Datasource: "Google Adwords",
    Campaign: "B2B - Leads",
    Clicks: 7,
    Impressions: 444
  }
];

afterEach(cleanup);
/*const dim = ["Datasource", "Campaign"];
const met = ["Clicks", "Impressions"];
*/
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Filter
      styling={styles}
      filterColumns={dimensions}
      dataSet={data}
    ></Filter>,
    div
  );
});

it("renders filter correctly", () => {
  render(
    <Filter styling={styles} filterColumns={dimensions} dataSet={data}></Filter>
  );
});

it("renders filter correctly", () => {
  const { getByTestId } = render(
    <Filter styling={styles} filterColumns={dimensions} dataSet={data}></Filter>
  );
  expect(getByTestId("filter")).toHaveTextContent("Filters");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Filter
        styling={styles}
        filterColumns={dimensions}
        dataSet={data}
      ></Filter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
