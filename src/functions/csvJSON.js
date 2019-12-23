export const csvJSON = csv => {
  // Receives a comma separated csv file as input. Outputs array of objects as result.
  const lines = csv.split("\n");
  const objectArray = lines.map(item => {
    const currentLine = item.split(",");
    return {
      Date: currentLine[0],
      Datasource: currentLine[1],
      Campaign: currentLine[2],
      Clicks: parseInt(currentLine[3]),
      Impressions: parseInt(currentLine[4])
    };
  });
  const newArray = objectArray.slice(1, objectArray.length - 1);
  return newArray;
};
