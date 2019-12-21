import { getColumns } from "../functions/getColumns";

test("get columns", () => {
  expect(
    getColumns({ Datasource: "Facebook Ads", Date: "01.02.2019" })
  ).toStrictEqual(["Datasource", "Date"]);
});
