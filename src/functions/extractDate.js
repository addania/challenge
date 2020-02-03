export const extractDate = input =>
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  input.map(row => {
    const entry = { ...row };
    entry.date = Date.parse(
      row.date.slice(6, 10) +
        "-" +
        row.date.slice(3, 5) +
        "-" +
        row.date.slice(0, 2)
    );
    return entry;
  });
