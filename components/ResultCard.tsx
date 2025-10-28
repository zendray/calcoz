'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Package, Target } from 'lucide-react';
import { CostResults } from '@/utils/calculations';
import { Currency, formatCurrency } from '@/utils/currency';
import YieldEfficiencyBadge from './YieldEfficiencyBadge';

interface ResultCardProps {
  results: CostResults;
  currency: Currency;
  totalFabricUsed: number;
  piecesProduced: number;
}

const ResultItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{label}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export default function ResultCard({ results, currency, totalFabricUsed, piecesProduced }: ResultCardProps) {
  const formattedAmount = (amount: number) => formatCurrency(amount, currency);

  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center gap-4">
        <h2 className="text-2xl font-bold text-center">Cost Analysis</h2>
        <YieldEfficiencyBadge totalFabricUsed={totalFabricUsed} piecesProduced={piecesProduced} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ResultItem
          icon={DollarSign}
          label="Cost Per Piece"
          value={formattedAmount(results.costPerPiece)}
        />
        <ResultItem
          icon={Target}
          label="Suggested Selling Price"
          value={formattedAmount(results.suggestedPrice)}
        />
        <ResultItem
          icon={TrendingUp}
          label="Profit Per Piece"
          value={formattedAmount(results.profitPerPiece)}
        />
        <ResultItem
          icon={Package}
          label="Total Batch Cost"
          value={formattedAmount(results.totalCost)}
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Total Batch Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-center text-primary">
            {formattedAmount(results.totalProfit)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
