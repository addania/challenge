export function generateFilterOptions(inputItem, inputDataSet) {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  let uniqueValues = [];
  for (let entry = 0; entry < inputDataSet.length; entry++) {
    if (!uniqueValues.includes(inputDataSet[entry][inputItem])) {
      uniqueValues.push(inputDataSet[entry][inputItem]);
    }
  }
  let newOptions = [];
  for (let optionItem = 0; optionItem < uniqueValues.length; optionItem++) {
    let optionRow = {
      key: uniqueValues[optionItem],
      text: uniqueValues[optionItem],
      value: uniqueValues[optionItem]
    };
    newOptions.push(optionRow);
  }
  return newOptions;
}
