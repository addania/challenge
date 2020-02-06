import React from "react";
import ReactDOM from "react-dom";
import { SubheaderList } from "../SubheaderList.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);
const dimensionsColumns = ["datasource", "campaign"];
const italics = { fontStyle: "italic" };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <SubheaderList
      dimensions={dimensionsColumns}
      italicsInput={italics}
    ></SubheaderList>,
    div
  );
});

it("renders subheader correctly", () => {
  render(
    <SubheaderList
      dimensions={dimensionsColumns}
      italicsInput={italics}
    ></SubheaderList>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <SubheaderList
        dimensions={dimensionsColumns}
        italicsInput={italics}
      ></SubheaderList>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
