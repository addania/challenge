import React from "react";
import ReactDOM from "react-dom";
import { List } from "../List.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

const italics = { fontStyle: "italic" };

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List></List>, div);
});

it("renders list correctly", () => {
  render(
    <List
      message="Select zero to N "
      columns="Datasource"
      styling={italics}
      key="0"
    ></List>
  );
});

it("renders list correctly", () => {
  const { getByTestId } = render(
    <List
      message="Select zero to N "
      columns="Datasource"
      styling={italics}
      key="0"
    ></List>
  );
  expect(getByTestId("list")).toHaveTextContent("Select zero to N Datasources");
});

it("renders list correctly", () => {
  const { getByTestId } = render(
    <List
      message="Select zero to N "
      columns="Campaign"
      styling={italics}
      key="0"
    ></List>
  );
  expect(getByTestId("list")).toHaveTextContent("Select zero to N Campaigns");
});

it("matches snapshot1", () => {
  const tree = renderer.create(<List></List>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot2", () => {
  const tree = renderer
    .create(
      <List
        message="Select zero to N "
        columns="Campaign"
        styling={italics}
        key="0"
      ></List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
