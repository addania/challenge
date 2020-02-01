export const formatImpressions = input => {
  // Receives an array of objects as inputs and substitutes empty or null impressions with 0.
  return input.map(row => {
    if (!row.Impressions) {
      row.Impressions = 0;
    }
    if (!row.Clicks) {
      row.Clicks = 0;
    }
    return row;
  });
};
