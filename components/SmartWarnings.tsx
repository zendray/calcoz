'use client';

import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Waves } from 'lucide-react';
import { CostResults } from '@/utils/calculations';

interface SmartWarningsProps {
  results: CostResults | null;
  profitPercent: number;
}

export default function SmartWarnings({ results, profitPercent }: SmartWarningsProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!results || !isVisible) return null;

  const warnings = [];
  if (profitPercent < 15) {
    warnings.push('Low Profit Margin: Consider increasing your selling price or reducing costs.');
  }
  if (results.breakdown.fabric > results.totalCost * 0.6) {
    warnings.push('High Fabric Cost: Fabric constitutes over 60% of your total cost.');
  }

  if (warnings.length === 0) return null;

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Smart Warnings</AlertTitle>
      <AlertDescription>
        <ul className="list-disc pl-5">
          {warnings.map((warning, index) => (
            <li key={index}>{warning}</li>
          ))}
        </ul>
        <button onClick={() => setIsVisible(false)} className="text-xs text-muted-foreground mt-2">Dismiss</button>
      </AlertDescription>
    </Alert>
  );
}
