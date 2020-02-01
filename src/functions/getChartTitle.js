import { getTitleList } from "./getTitleList";

export const getChartTitle = filter => {
  // Receives filter as input and generates corresponding message
  if (filter["Campaign"] === undefined && filter["Datasource"] !== undefined) {
    return "Datasource " + getTitleList(filter.Datasource) + "; All Campaigns";
  } else if (
    filter["Datasource"] === undefined &&
    filter["Campaign"] !== undefined
  ) {
    return "All Datasources; Campaign " + getTitleList(filter.Campaign);
  } else if (
    filter["Campaign"] === undefined &&
    filter["Datasource"] === undefined
  ) {
    return "All Datasources; All Campaigns";
  } else {
    return (
      "Datasource " +
      getTitleList(filter.Datasource) +
      "; Campaign " +
      getTitleList(filter.Campaign)
    );
  }
};
