'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CostResults } from '@/utils/calculations';
import { Currency, formatCurrency } from '@/utils/currency';

interface BatchProfitSimulatorProps {
  results: CostResults | null;
  currency: Currency;
  quantity: number;
}

export default function BatchProfitSimulator({ results, currency, quantity }: BatchProfitSimulatorProps) {
  if (!results) return null;

  const data = [-50, -25, 0, 25, 50, 100].map(percentChange => {
    const newQuantity = quantity * (1 + percentChange / 100);
    const newTotalCost = results.costPerPiece * newQuantity;
    const newTotalRevenue = results.suggestedPrice * newQuantity;
    const newTotalProfit = newTotalRevenue - newTotalCost;
    return {
      name: `${percentChange > 0 ? '+' : ''}${percentChange}%`,
      profit: newTotalProfit,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Batch Profit Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => formatCurrency(value, currency)} />
              <Tooltip formatter={(value: number) => [formatCurrency(value, currency), 'Profit']} />
              <Line type="monotone" dataKey="profit" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
