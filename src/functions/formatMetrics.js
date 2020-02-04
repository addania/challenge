export const formatMetrics = input =>
  // Receives an array of objects as inputs and substitutes empty or null impressions or clicks with 0.
  input.map(row => {
    if (!row.impressions) {
      row.impressions = 0;
    }
    if (!row.clicks) {
      row.clicks = 0;
    }
    return row;
  });
