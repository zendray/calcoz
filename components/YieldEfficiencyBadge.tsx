'use client';

import { Badge } from '@/components/ui/badge';

interface YieldEfficiencyBadgeProps {
  totalFabricUsed: number;
  piecesProduced: number;
}

export default function YieldEfficiencyBadge({ totalFabricUsed, piecesProduced }: YieldEfficiencyBadgeProps) {
  if (piecesProduced === 0) return null;

  const fabricPerPiece = totalFabricUsed / piecesProduced;
  // Assuming an ideal consumption of 1.5m per piece for this calculation
  const idealConsumption = 1.5;
  const efficiency = Math.max(0, (idealConsumption / fabricPerPiece) * 100);

  const getBadgeVariant = () => {
    if (efficiency >= 90) return 'default'; // Green in shadcn/ui
    if (efficiency >= 75) return 'secondary'; // Orange-like in shadcn/ui
    return 'destructive'; // Red in shadcn/ui
  };

  return (
    <Badge variant={getBadgeVariant()}>
      Efficiency: {efficiency.toFixed(0)}%
    </Badge>
  );
}
