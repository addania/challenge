export const filterArray = (filter, data) => {
  // Receives data for filtering and filters in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  if (!(Object.entries(filter).length === 0 && filter.constructor === Object)) {
    if (filter.datasource === undefined || filter.datasource.length === 0) {
      return data.filter(item => filter.campaign.includes(item.campaign));
    } else if (filter.campaign === undefined || filter.campaign.length === 0) {
      return data.filter(item => filter.datasource.includes(item.datasource));
    } else {
      return data.filter(
        item =>
          filter.datasource.includes(item.datasource) &&
          filter.campaign.includes(item.campaign)
      );
    }
  }
};
