export const filterArray = (filter, data) => {
  // Receives data for filtering and filters in order to calculate subset of data which was filtered.
  // Outputs filtered array.
  if (!(Object.entries(filter).length === 0 && filter.constructor === Object)) {
    if (filter.Datasource === undefined || filter.Datasource.length === 0) {
      return data.filter(item => {
        return filter.Campaign.includes(item.Campaign);
      });
    } else if (filter.Campaign === undefined || filter.Campaign.length === 0) {
      return data.filter(item => {
        return filter.Datasource.includes(item.Datasource);
      });
    } else {
      return data.filter(item => {
        return (
          filter.Datasource.includes(item.Datasource) &&
          filter.Campaign.includes(item.Campaign)
        );
      });
    }
  }
};
