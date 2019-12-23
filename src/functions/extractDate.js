export const extractDate = input => {
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  const convertDate = row => {
    const entry = { ...row };
    const oldDate = row.Date;
    const year = oldDate.slice(6, 10);
    const month = oldDate.slice(3, 5);
    const day = oldDate.slice(0, 2);
    const newDate = year + "-" + month + "-" + day;
    const dateFormatted = new Date(newDate);
    entry.Date = dateFormatted;
    return entry;
  };
  const dataWithDate = input.map(convertDate);
  return dataWithDate;
};
