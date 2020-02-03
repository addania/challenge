export const extractDate = input =>
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  input.map(row => {
    const entry = { ...row };
    entry.Date = Date.parse(
      row.Date.slice(6, 10) +
        "-" +
        row.Date.slice(3, 5) +
        "-" +
        row.Date.slice(0, 2)
    );
    return entry;
  });
