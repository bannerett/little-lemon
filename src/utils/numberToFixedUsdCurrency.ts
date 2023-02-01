export const numberToFixedUsdCurrency = (value: number, fix = 2): string =>
  Number(value.toFixed(fix)).toLocaleString(window.navigator.language, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fix,
  });
