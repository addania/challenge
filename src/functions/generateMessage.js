import { generateList } from "./generateList";

export const generateMessage = filterForMessage => {
  // Receives filter as input and generates corresponding message
  if (
    filterForMessage["Campaign"] === undefined &&
    filterForMessage["Datasource"] !== undefined
  ) {
    const campaignMessage = "All Campaigns";
    const datasourcesList = generateList(filterForMessage.Datasource);
    const datasourceMessage = "Datasource " + datasourcesList;
    const filterMessage = datasourceMessage + "; " + campaignMessage;
    return filterMessage;
  } else if (
    filterForMessage["Datasource"] === undefined &&
    filterForMessage["Campaign"] !== undefined
  ) {
    const datasourceMessage = "All Datasources";
    const campaignsList = generateList(filterForMessage.Campaign);
    const campaignMessage = "Campaign " + campaignsList;
    const filterMessage = datasourceMessage + "; " + campaignMessage;
    return filterMessage;
  } else if (
    filterForMessage["Campaign"] === undefined &&
    filterForMessage["Datasource"] === undefined
  ) {
    const datasourceMessage = "All Datasources ";
    const campaignMessage = "All Campaigns";
    const filterMessage = datasourceMessage + "; " + campaignMessage;
    return filterMessage;
  } else {
    const datasourcesList = generateList(filterForMessage.Datasource);
    const campaignsList = generateList(filterForMessage.Campaign);
    const datasourceMessage = "Datasource " + datasourcesList;
    const campaignMessage = "Campaign " + campaignsList;
    const filterMessage = datasourceMessage + "; " + campaignMessage;
    return filterMessage;
  }
};
