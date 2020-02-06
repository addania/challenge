import { getTitleList } from "./getTitleList";

export const getChartTitle = filter => {
  // Receives filter as input and generates corresponding message
  if (filter["campaign"] === undefined && filter["datasource"] !== undefined) {
    return "Datasource " + getTitleList(filter.datasource) + "; All Campaigns";
  } else if (
    filter["datasource"] === undefined &&
    filter["campaign"] !== undefined
  ) {
    return "All Datasources; Campaign " + getTitleList(filter.campaign);
  } else if (
    filter["campaign"] === undefined &&
    filter["datasource"] === undefined
  ) {
    return "All Datasources; All Campaigns";
  } else {
    return (
      "Datasource " +
      getTitleList(filter.datasource) +
      "; Campaign " +
      getTitleList(filter.campaign)
    );
  }
};
