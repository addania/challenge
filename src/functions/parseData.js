import { csvJSON } from "./csvJSON";
import { formatImpressions } from "./formatImpressions";
import { extractDate } from "./extractDate";
import { sortArray } from "./sortArray";
import { getColumns } from "./getColumns";
import { getMetrics } from "./getMetrics";
import { getDimensions } from "./getDimensions";
import { formatDate } from "./formatDate";

export const parseData = csvData => {
  const jsonData = csvJSON(csvData);
  const formattedImpressions = formatImpressions(jsonData);
  const formattedDates = extractDate(formattedImpressions);
  const sortedData = sortArray(formattedDates);
  const tableColumns = getColumns(sortedData[0]);
  const metricColumns = getMetrics(sortedData[0], tableColumns);
  const dimensionColumns = getDimensions(sortedData[0], tableColumns);
  const finalData = formatDate(sortedData);
  return [finalData, metricColumns, dimensionColumns];
};
