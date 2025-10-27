export interface CostInputs {
  // Fabric Inputs (user provides raw data)
  totalFabricUsed?: number;
  piecesProduced?: number;
  fabricCostPerMeter?: number;
  
  // Per-Piece Variable Inputs
  jobberCostPerPiece?: number;
  washingCostPerPiece?: number;
  pressPackingCostPerPiece?: number;
  accessoriesCostPerPiece?: number;

  // Overhead & Batch Inputs
  monthlyFixed?: number;
  monthlyProduction?: number;
  quantity?: number;
  profitPercent?: number;
}

export interface CostBreakdown {
  fabric: number;
  jobber: number;
  washing: number;
  pressPacking: number;
  accessories: number;
  overheads: number;
}

export interface CostResults {
  costPerPiece: number;
  suggestedPrice: number;
  profitPerPiece: number;
  totalCost: number;
  totalProfit: number;
  breakdown: CostBreakdown;
}

export function calculateCosts({
  // Fabric Inputs (user provides raw data)
  totalFabricUsed = 0,
  piecesProduced = 1,
  fabricCostPerMeter = 0,
  
  // Per-Piece Variable Inputs
  jobberCostPerPiece = 0,
  washingCostPerPiece = 0,
  pressPackingCostPerPiece = 0,
  accessoriesCostPerPiece = 0,

  // Overhead & Batch Inputs
  monthlyFixed = 0,
  monthlyProduction = 1, // Avoid division by zero
  quantity = 1,
  profitPercent = 25,
}: CostInputs): CostResults {
  // 1. Calculate fabric consumption per piece (we do the math for the user)
  const fabricConsumptionPerPiece = piecesProduced > 0 ? totalFabricUsed / piecesProduced : 0;
  
  // 2. Calculate total variable cost for a single piece
  const fabricCostPerPiece = fabricConsumptionPerPiece * fabricCostPerMeter;
  const totalVariableCostPerPiece =
    fabricCostPerPiece +
    jobberCostPerPiece +
    washingCostPerPiece +
    pressPackingCostPerPiece +
    accessoriesCostPerPiece;

  // 2. Calculate the portion of fixed cost for a single piece
  const perPieceFixed = monthlyProduction > 0 ? monthlyFixed / monthlyProduction : 0;

  // 3. Determine the final, true cost of one piece
  const costPerPiece = totalVariableCostPerPiece + perPieceFixed;

  // 4. Calculate pricing and batch totals
  const suggestedPrice = costPerPiece * (1 + profitPercent / 100);
  const profitPerPiece = suggestedPrice - costPerPiece;
  const totalCost = costPerPiece * quantity;
  const totalProfit = profitPerPiece * quantity;

  // Return all values for the UI
  return {
    costPerPiece: Math.round(costPerPiece * 100) / 100,
    suggestedPrice: Math.round(suggestedPrice * 100) / 100,
    profitPerPiece: Math.round(profitPerPiece * 100) / 100,
    totalCost: Math.round(totalCost * 100) / 100,
    totalProfit: Math.round(totalProfit * 100) / 100,
    breakdown: {
      fabric: Math.round(fabricCostPerPiece * 100) / 100,
      jobber: Math.round(jobberCostPerPiece * 100) / 100,
      washing: Math.round(washingCostPerPiece * 100) / 100,
      pressPacking: Math.round(pressPackingCostPerPiece * 100) / 100,
      accessories: Math.round(accessoriesCostPerPiece * 100) / 100,
      overheads: Math.round(perPieceFixed * 100) / 100,
    },
  };
}
