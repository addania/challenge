import { parseCsv } from "./parseCsv";
import { formatImpressions } from "./formatImpressions";
import { extractDate } from "./extractDate";
import { sortArray } from "./sortArray";
import { getColumns } from "./getColumns";
import { getMetrics } from "./getMetrics";
import { getDimensions } from "./getDimensions";

export const parseData = csvData => {
  const sortedData = sortArray(
    extractDate(formatImpressions(parseCsv(csvData)))
  );
  return {
    sortedData: sortedData,
    metrics: getMetrics(sortedData[0], getColumns(sortedData[0])),
    dimensions: getDimensions(sortedData[0], getColumns(sortedData[0]))
  };
};
