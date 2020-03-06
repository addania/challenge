import _ from "lodash";

export const parseData = csvData => {
  const sortedData = sortArray(extractDate(formatMetrics(parseCsv(csvData))));
  return {
    sortedData: sortedData,
    metrics: getMetrics(sortedData[0], getColumns(sortedData[0])),
    dimensions: getDimensions(sortedData[0], getColumns(sortedData[0]))
  };
};

const parseCsv = csv => {
  // Receives a comma separated csv file as input. Outputs array of objects as result.
  const objectArray = csv.split("\n").map(item => ({
    date: item.split(",")[0],
    datasource: item.split(",")[1],
    campaign: item.split(",")[2],
    clicks: parseInt(item.split(",")[3]),
    impressions: parseInt(item.split(",")[4])
  }));
  return objectArray.slice(1, objectArray.length - 1);
};

const formatMetrics = input =>
  // Receives an array of objects as inputs and substitutes empty or null impressions or clicks with 0.
  input.map(row => {
    if (!row.impressions) {
      row.impressions = 0;
    }
    if (!row.clicks) {
      row.clicks = 0;
    }
    return row;
  });

const extractDate = input =>
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  input.map(row => {
    const entry = { ...row };
    entry.date = Date.parse(
      row.date.slice(6, 10) +
        "-" +
        row.date.slice(3, 5) +
        "-" +
        row.date.slice(0, 2)
    );
    return entry;
  });

const sortArray = input =>
  // Receives an array of objects as input and sorts the entries based on Date, Datasource and Campaign as output.
  _.sortBy(input, ["date", "datasource", "campaign"]);

const getColumns = input =>
  // Receives an array of objects as input and outputs an array with unique keys (columns).
  Object.keys(input);

const getMetrics = (inputData, inputColumns) =>
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds numeric values.
  inputColumns.filter(
    column => typeof inputData[column] === "number" && column !== "date"
  );

const getDimensions = (inputData, inputColumns) =>
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds string values (excluding date formats).
  inputColumns.filter(column => typeof inputData[column] === "string");
