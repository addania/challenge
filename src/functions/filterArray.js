import _ from "lodash";

export function filterArray(filter, data) {
  // Receives filter and data in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  let filteredArray = [];
  if (!(Object.entries(filter).length === 0 && filter.constructor === Object)) {
    if (filter.Datasource === undefined || filter.Datasource.length == 0) {
      filteredArray = _.filter(data, function(i) {
        return filter.Campaign.includes(i.Campaign);
      });
    } else if (filter.Campaign === undefined || filter.Campaign.length == 0) {
      filteredArray = _.filter(data, function(i) {
        return filter.Datasource.includes(i.Datasource);
      });
    } else {
      filteredArray = _.filter(data, function(i) {
        return (
          filter.Datasource.includes(i.Datasource) &&
          filter.Campaign.includes(i.Campaign)
        );
      });
    }
  }
  return filteredArray;
}
