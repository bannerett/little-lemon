import { numberToFixedUsdCurrency } from 'utils/numberToFixedUsdCurrency';

describe('numberToFixedUsdCurrency test suite', () => {
  it('should convert number to fixed 2 USD', () => {
    expect(numberToFixedUsdCurrency(10)).toEqual('$10.00');
  });

  it('should convert number to fixed 2 USD', () => {
    expect(numberToFixedUsdCurrency(10.123456)).toEqual('$10.12');
  });

  it('should convert number to fixed 2 USD', () => {
    expect(numberToFixedUsdCurrency('10.123456' as unknown as number)).toBeUndefined();
  });
});
