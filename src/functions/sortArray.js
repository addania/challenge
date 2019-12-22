import _ from "lodash";

export const sortArray = input => {
  // Receives an array of objects as input and sorts the entries based on Date, Datasource and Campaign as output.
  const output = _.sortBy(input, ["Date", "Datasource", "Campaign"]);
  return output;
};
