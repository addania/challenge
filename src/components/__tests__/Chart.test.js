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

const filter = { Datasource: ["Facebook Ads"] };
const filter2 = { Campaign: ["Like Ads", "B2B - Leads"] };

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
