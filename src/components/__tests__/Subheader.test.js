import React from "react";
import ReactDOM from "react-dom";
import { Subheader } from "../Subheader.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);
const dimensions = ["datasource", "campaign"];
const metrics = ["clicks", "impressions"];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Subheader
      dimensionsColumns={dimensions}
      metricsColumns={metrics}
    ></Subheader>,
    div
  );
});

it("renders subheader correctly", () => {
  render(
    <Subheader
      dimensionsColumns={dimensions}
      metricsColumns={metrics}
    ></Subheader>
  );
});

it("renders subheader correctly", () => {
  const { getByTestId } = render(
    <Subheader
      dimensionsColumns={dimensions}
      metricsColumns={metrics}
    ></Subheader>
  );
  expect(getByTestId("subheader")).toHaveTextContent(
    'Hitting "Apply" filters the chart to show a timeseries for both'
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Subheader
        dimensionsColumns={dimensions}
        metricsColumns={metrics}
      ></Subheader>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
