import { handleClickHelper } from "../functions/handleClickHelper";
const selection = {
  Datasource: ["Facebook Ads"]
};
const selection2 = {};
test("handle click helper", () => {
  expect(handleClickHelper(selection)).toStrictEqual({
    applyFilter: true,
    filterValue: selection
  });
  expect(handleClickHelper(selection2)).toStrictEqual({
    applyFilter: false,
    filterValue: 0
  });
});
