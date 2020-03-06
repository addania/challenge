import React from "react";
import ReactDOM from "react-dom";
import App from "../../App.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { handleClickHelper } from "../../functions/handleClickHelper";
import { handleChangeHelper } from "../../functions/handleChangeHelper";

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

const selection = {
  campaign: ["Like Ads"],
  datasource: ["Facebook Ads"]
};
const selectionOutput = {
  campaign: ["Like Ads"],
  datasource: ["Facebook Ads", "Google Adwords"]
};
const selectionOutput2 = {
  datasource: ["Facebook Ads", "Google Adwords"]
};
const selectionOutput3 = {
  datasource: ["Facebook Ads"]
};

test("handle change helper", () => {
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "datasource",
        value: ["Facebook Ads", "Google Adwords"]
      },
      selection
    )
  ).toStrictEqual(selectionOutput);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "campaign",
        value: []
      },
      selectionOutput
    )
  ).toStrictEqual(selectionOutput2);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "datasource",
        value: ["Facebook Ads"]
      },
      selectionOutput2
    )
  ).toStrictEqual(selectionOutput3);
  expect(
    handleChangeHelper(
      0,
      {
        placeholder: "campaign",
        value: ["Like Ads"]
      },
      selectionOutput3
    )
  ).toStrictEqual(selection);
});

const selection3 = {
  datasource: ["Facebook Ads"]
};
const selection2 = {};
test("handle click helper", () => {
  expect(handleClickHelper(selection3)).toStrictEqual({
    applyFilter: true,
    filterValue: selection3
  });
  expect(handleClickHelper(selection2)).toStrictEqual({
    applyFilter: false,
    filterValue: 0
  });
});
