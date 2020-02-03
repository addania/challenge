export const csvJSON = csv => {
  // Receives a comma separated csv file as input. Outputs array of objects as result.
  const objectArray = csv.split("\n").map(item => ({
    Date: item.split(",")[0],
    Datasource: item.split(",")[1],
    Campaign: item.split(",")[2],
    Clicks: parseInt(item.split(",")[3]),
    Impressions: parseInt(item.split(",")[4])
  }));
  return objectArray.slice(1, objectArray.length - 1);
};
