import { getColumns } from "../functions/getColumns";

test("get columns", () => {
  expect(
    getColumns({ datasource: "Facebook Ads", date: "01.02.2019" })
  ).toStrictEqual(["datasource", "date"]);
});
