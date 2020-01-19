import { getTitleList } from "./getTitleList";

export function getChartTitle(filter) {
  // Receives filter as input and generates corresponding message
  let datasourceMessage = "All Datasources";
  let campaignMessage = "All Campaigns";
  if (filter["Campaign"] === undefined && filter["Datasource"] !== undefined) {
    datasourceMessage = "Datasource " + getTitleList(filter.Datasource);
  } else if (
    filter["Datasource"] === undefined &&
    filter["Campaign"] !== undefined
  ) {
    campaignMessage = "Campaign " + getTitleList(filter.Campaign);
  } else if (
    filter["Campaign"] !== undefined &&
    filter["Datasource"] !== undefined
  ) {
    datasourceMessage = "Datasource " + getTitleList(filter.Datasource);
    campaignMessage = "Campaign " + getTitleList(filter.Campaign);
  }
  return datasourceMessage + "; " + campaignMessage;
}
