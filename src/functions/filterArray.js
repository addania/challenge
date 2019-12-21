import _ from "lodash";

export function filterArray(filtering, dataForFiltering) {
  // Receives data for filtering and filters in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  console.log("filtering", filtering);
  console.log("dataForFiltering", dataForFiltering);
  const filteredDatasources = filtering.Datasource;
  const filteredCampaigns = filtering.Campaign;
  let filteredArray = [];
  if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    ) &&
    (filteredDatasources === undefined || filteredDatasources.length == 0)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      return filteredCampaigns.includes(i.Campaign);
    });
  } else if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    ) &&
    (filteredCampaigns === undefined || filteredCampaigns.length == 0)
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      return filteredDatasources.includes(i.Datasource);
    });
  } else if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    )
  ) {
    filteredArray = _.filter(dataForFiltering, function(i) {
      return (
        filteredDatasources.includes(i.Datasource) &&
        filteredCampaigns.includes(i.Campaign)
      );
    });
  }
  console.log("filteredArray", filteredArray);
  return filteredArray;
}
