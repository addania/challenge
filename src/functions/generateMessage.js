import { generateList } from "./generateList";

export function generateMessage(filterForMessage) {
  // Receives filter as input and generates corresponding message
  let filterMessage = "";
  let datasourceMessage = "";
  let campaignMessage = "";
  if (
    filterForMessage["Campaign"] == undefined &&
    filterForMessage["Datasource"] != undefined
  ) {
    campaignMessage = "All Campaigns";
    let datasourcesList = generateList(filterForMessage.Datasource);
    datasourceMessage = "Datasource " + datasourcesList;
  } else if (
    filterForMessage["Datasource"] == undefined &&
    filterForMessage["Campaign"] != undefined
  ) {
    datasourceMessage = "All Datasources";
    let campaignsList = generateList(filterForMessage.Campaign);
    campaignMessage = "Campaign " + campaignsList;
  } else if (
    filterForMessage["Campaign"] == undefined &&
    filterForMessage["Datasource"] == undefined
  ) {
    datasourceMessage = "All Datasources ";
    campaignMessage = "All Campaigns";
  } else {
    let datasourcesList = generateList(filterForMessage.Datasource);
    let campaignsList = generateList(filterForMessage.Campaign);
    datasourceMessage = "Datasource " + datasourcesList;
    campaignMessage = "Campaign " + campaignsList;
  }
  filterMessage = datasourceMessage + "; " + campaignMessage;
  return filterMessage;
}
