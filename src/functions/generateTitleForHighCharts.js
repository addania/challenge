import { generateTitleList } from "./generateTitleList";

export function generateTitleForHighCharts(filter) {
  // Receives filter as input and generates corresponding message
  let datasourceMessage = "All Datasources";
  let campaignMessage = "All Campaigns";
  if (filter["Campaign"] === undefined && filter["Datasource"] !== undefined) {
    datasourceMessage = "Datasource " + generateTitleList(filter.Datasource);
  } else if (
    filter["Datasource"] === undefined &&
    filter["Campaign"] !== undefined
  ) {
    campaignMessage = "Campaign " + generateTitleList(filter.Campaign);
  } else if (
    filter["Campaign"] !== undefined &&
    filter["Datasource"] !== undefined
  ) {
    datasourceMessage = "Datasource " + generateTitleList(filter.Datasource);
    campaignMessage = "Campaign " + generateTitleList(filter.Campaign);
  }
  return datasourceMessage + "; " + campaignMessage;
}
