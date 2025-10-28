'use client';

import { Calculator } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { currencies, Currency } from '@/utils/currency';

interface HeaderProps {
  currency: Currency;
  onCurrencyChange: (code: string) => void;
}

export default function Header({ currency, onCurrencyChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Calculator className="h-6 w-6 mr-2" />
          <span className="font-bold">Calcoz</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Select value={currency.code} onValueChange={onCurrencyChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr.code} value={curr.code}>
                  {curr.symbol} {curr.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
