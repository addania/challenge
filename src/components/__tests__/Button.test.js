import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  render(<Button></Button>);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button></Button>);
  expect(getByTestId("button")).toHaveTextContent("Apply");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
