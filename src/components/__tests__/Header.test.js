import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../Header.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});

it("renders header correctly", () => {
  render(<Header></Header>);
});

it("renders header correctly", () => {
  const { getByTestId } = render(<Header></Header>);
  expect(getByTestId("header")).toHaveTextContent(
    "Advertising Data ETL-V Challenge"
  );
});

it("matches snapshot", () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
