export function csvJSON(csv) {
  // Receives a comma separated csv file as input. Outputs array of objects as result.
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");
    for (var j = 0; j < headers.length; j++) {
      const columnValue = currentline[j];
      if (j === 3 || j === 4) {
        obj[headers[j]] = parseInt(columnValue);
      } else {
        obj[headers[j]] = columnValue;
      }
    }
    result.push(obj);
  }
  return result.slice(0, result.length - 1);
}
