export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Rate relative to INR
}

export const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 1 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.012 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.011 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0095 },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 0.044 },
];

export function formatCurrency(amount: number, currency: Currency): string {
  const convertedAmount = amount * currency.rate;
  return `${currency.symbol}${convertedAmount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function getCurrencyByCode(code: string): Currency {
  return currencies.find(c => c.code === code) || currencies[0];
}
