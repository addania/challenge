export const generateOptionsFilter = (inputItem, inputDataSet) => {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  const uniqueValues = [...new Set(inputDataSet.map(item => item[inputItem]))];
  const newOptions = uniqueValues.map(item => {
    return {
      key: item,
      text: item,
      value: item
    };
  });
  return newOptions;
};
