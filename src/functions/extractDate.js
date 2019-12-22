export const extractDate = input => {
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  const dataWithDate = [];
  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };
    const oldDate = input[row].Date;
    const year = oldDate.slice(6, 10);
    const month = oldDate.slice(3, 5);
    const day = oldDate.slice(0, 2);
    const newDate = year + "-" + month + "-" + day;
    const dateFormatted = new Date(newDate);
    entry.Date = dateFormatted;
    dataWithDate.push(entry);
  }
  return dataWithDate;
};
