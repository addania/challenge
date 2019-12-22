import React from "react";
import ReactDOM from "react-dom";
import App from "../../App.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});

it("renders app correctly", () => {
  render(<App></App>);
});

it("renders app correctly", () => {
  const { getByTestId } = render(<App></App>);
  expect(getByTestId("app")).toHaveTextContent(
    "Advertising Data ETL-V Challenge"
  );
});
