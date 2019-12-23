const moment = require("moment");

export const formatDate = input => {
  // Receives an array of objects as input and formats date entries into a "DD. MMM" format. Outputs data as "dataWithDate".

  const convertDate = row => {
    const entry = { ...row };
    const oldDate = row.Date;
    const dateFormatted = moment(oldDate, "DD.MM.YYYY").format("DD. MMM");
    entry.Date = dateFormatted;
    return entry;
  };
  const formattedDateArray = input.map(convertDate);
  return formattedDateArray;
};
