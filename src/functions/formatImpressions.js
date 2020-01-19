export function formatImpressions(input) {
  // Receives an array of objects as inputs and substitutes empty or null impressions or clicks with 0.
  for (let row = 0; row < input.length; row++) {
    if (!input[row].Impressions) {
      input[row].Impressions = 0;
    }
    if (!input[row].Clicks) {
      input[row].Clicks = 0;
    }
  }
  return input;
}
