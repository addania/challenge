const moment = require("moment");

export function formatDate(input) {
  // Receives an array of objects as input and formats date entries into a "DD. MMM" format. Outputs data as "dataWithDate".
  const formattedDateArray = [];
  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };
    entry.Date = moment(input[row].Date, "DD.MM.YYYY").format("DD. MMM");
    formattedDateArray.push(entry);
  }
  return formattedDateArray;
}
