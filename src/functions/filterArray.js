import _ from "lodash";

export const filterArray = (filtering, dataForFiltering) => {
  // Receives data for filtering and filters in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  const filteredDatasources = filtering.Datasource;
  const filteredCampaigns = filtering.Campaign;
  if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    ) &&
    (filteredDatasources === undefined || filteredDatasources.length === 0)
  ) {
    const filteredArray = _.filter(dataForFiltering, function(i) {
      return filteredCampaigns.includes(i.Campaign);
    });
    return filteredArray;
  } else if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    ) &&
    (filteredCampaigns === undefined || filteredCampaigns.length === 0)
  ) {
    const filteredArray = _.filter(dataForFiltering, function(i) {
      return filteredDatasources.includes(i.Datasource);
    });
    return filteredArray;
  } else if (
    !(
      Object.entries(filtering).length === 0 && filtering.constructor === Object
    )
  ) {
    const filteredArray = _.filter(dataForFiltering, function(i) {
      return (
        filteredDatasources.includes(i.Datasource) &&
        filteredCampaigns.includes(i.Campaign)
      );
    });
    return filteredArray;
  } else {
    const filteredArray = [];
    return filteredArray;
  }
};
