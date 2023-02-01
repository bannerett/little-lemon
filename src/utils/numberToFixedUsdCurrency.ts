export const numberToFixedUsdCurrency = (value: number, fix = 2): string | undefined => {
  if (!Number.isFinite(value)) return undefined;
  return Number(value.toFixed(fix)).toLocaleString(window.navigator.language, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fix,
  });
};
