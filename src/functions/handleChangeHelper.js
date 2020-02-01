export const handleChangeHelper = (event, data, selectedValues) => {
  // Function is triggered on every change of Filter component. Receives information about event as input.
  // Sets selectedValues state with information about which columns and their values were selected.
  // Sets useFilter state to false when new filter was selected but button Apply was not yet clicked.
  if (data.value === undefined || data.value.length === 0) {
    if (data.placeholder === "Campaign") {
      const { Campaign, ...newArray } = { ...selectedValues };
      return newArray;
    } else if (data.placeholder === "Datasource") {
      const { Datasource, ...newArray } = { ...selectedValues };
      return newArray;
    }
  } else {
    return Object.assign(
      { ...selectedValues },
      {
        [data.placeholder]: data.value
      }
    );
  }
};
