export const csvJSON = csv => {
  // Receives a comma separated csv file as input. Outputs array of objects as result.
  const objectArray = csv.split("\n").map(item => ({
    date: item.split(",")[0],
    datasource: item.split(",")[1],
    campaign: item.split(",")[2],
    clicks: parseInt(item.split(",")[3]),
    impressions: parseInt(item.split(",")[4])
  }));
  return objectArray.slice(1, objectArray.length - 1);
};
