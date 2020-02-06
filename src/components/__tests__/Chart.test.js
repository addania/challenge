import React from "react";
import ReactDOM from "react-dom";
import { Chart } from "../Chart.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const styles = {
  margin: "30px 0px",
  textAlign: "left",
  color: "#8DA1B9"
};
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

const filter = { datasource: ["Facebook Ads"] };
const filter2 = { campaign: ["Like Ads", "B2B - Leads"] };

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Chart></Chart>, div);
});

it("renders chart correctly", () => {
  render(
    <Chart
      coreData={data}
      filters={filter}
      applyFilters="true"
      styling={styles}
    ></Chart>
  );
});

it("renders chart correctly with filter1", () => {
  const { getByTestId } = render(
    <Chart
      coreData={data}
      filters={filter}
      applyFilters="true"
      styling={styles}
    ></Chart>
  );
  expect(getByTestId("chart")).toHaveTextContent("Chart");
});

it("renders chart correctly with filter2", () => {
  const { getByTestId } = render(
    <Chart
      coreData={data}
      filters={filter2}
      applyFilters="true"
      styling={styles}
    ></Chart>
  );
  expect(getByTestId("chart")).toHaveTextContent("Chart");
});
