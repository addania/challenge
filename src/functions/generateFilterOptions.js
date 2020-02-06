export const generateFilterOptions = (inputItem, inputDataSet) => {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  const uniqueValues = [...new Set(inputDataSet.map(item => item[inputItem]))];
  return uniqueValues.map(item => ({
    key: item,
    text: item,
    value: item
  }));
};
