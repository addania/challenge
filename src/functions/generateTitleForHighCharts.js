import { generateList } from "./generateList";

export function generateTitleForHighCharts(filter) {
  // Receives filter as input and generates corresponding message
  let datasourceMessage = "All Datasources";
  let campaignMessage = "All Campaigns";
  if (filter["Campaign"] === undefined && filter["Datasource"] !== undefined) {
    datasourceMessage = "Datasource " + generateList(filter.Datasource);
  } else if (
    filter["Datasource"] === undefined &&
    filter["Campaign"] !== undefined
  ) {
    campaignMessage = "Campaign " + generateList(filter.Campaign);
  } else if (
    filter["Campaign"] !== undefined &&
    filter["Datasource"] !== undefined
  ) {
    datasourceMessage = "Datasource " + generateList(filter.Datasource);
    campaignMessage = "Campaign " + generateList(filter.Campaign);
  }
  return datasourceMessage + "; " + campaignMessage;
}
