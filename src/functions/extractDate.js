export function extractDate(input) {
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  const dataWithDate = [];
  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };
    entry.Date = Date.parse(
      input[row].Date.slice(6, 10) +
        "-" +
        input[row].Date.slice(3, 5) +
        "-" +
        input[row].Date.slice(0, 2)
    );
    dataWithDate.push(entry);
  }
  return dataWithDate;
}
