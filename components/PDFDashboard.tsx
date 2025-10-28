'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

import { CostResults } from '@/utils/calculations';
import { Currency } from '@/utils/currency';

interface PDFDashboardProps {
  plan: 'basic' | 'pro' | null;
  designNumber: string;
  values: {
    totalFabricUsed: number;
    piecesProduced: number;
    fabricCostPerMeter: number;
    jobberCostPerPiece: number;
    washingCostPerPiece: number;
    pressPackingCostPerPiece: number;
    accessoriesCostPerPiece: number;
    monthlyFixed: number;
    monthlyProduction: number;
    quantity: number;
    profitPercent: number;
  };
  results: CostResults;
  currency: Currency;
}

export default function PDFDashboard({ designNumber, values, results, currency, plan }: PDFDashboardProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (plan === 'pro') {
      const generateQrCode = async () => {
        try {
          const url = await QRCode.toDataURL(JSON.stringify(values));
          setQrCodeUrl(url);
        } catch (err) {
          console.error(err);
        }
      };
      generateQrCode();
    }
  }, [values, plan]);
  const fabricConsumption = values.piecesProduced > 0 
    ? (values.totalFabricUsed / values.piecesProduced).toFixed(2) 
    : '0.00';

  return (
    <div className="bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center border-b pb-4">
          <h1 className="text-3xl font-bold">Cost Analysis</h1>
          <p className="text-muted-foreground">Design: {designNumber || 'Untitled'}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Cost Per Piece</p>
            <p className="text-2xl font-bold">{currency.symbol}{results.costPerPiece.toFixed(2)}</p>
          </div>
          <div className="p-4 border rounded-lg text-center bg-primary text-primary-foreground">
            <p className="text-sm">Suggested Price</p>
            <p className="text-2xl font-bold">{currency.symbol}{results.suggestedPrice.toFixed(2)}</p>
          </div>
          <div className="p-4 border rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Profit Per Piece</p>
            <p className="text-2xl font-bold">{currency.symbol}{results.profitPerPiece.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Input Data</h2>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Total Fabric Used:</span> <span>{values.totalFabricUsed} m</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Pieces Produced:</span> <span>{values.piecesProduced} pcs</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Fabric Consumption:</span> <span>{fabricConsumption} m/pc</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Fabric Cost:</span> <span>{currency.symbol}{values.fabricCostPerMeter}/m</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Jobber Cost:</span> <span>{currency.symbol}{values.jobberCostPerPiece}/pc</span></div>
                <div className="flex justify-between
                "><span className="text-muted-foreground">Washing Cost:</span> <span>{currency.symbol}{values.washingCostPerPiece}/pc</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Press & Pack:</span> <span>{currency.symbol}{values.pressPackingCostPerPiece}/pc</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Accessories:</span> <span>{currency.symbol}{values.accessoriesCostPerPiece}/pc</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly Overheads:</span> <span>{currency.symbol}{values.monthlyFixed}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly Production:</span> <span>{values.monthlyProduction} pcs</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Batch Quantity:</span> <span>{values.quantity} pcs</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Profit Margin:</span> <span className="font-semibold">{values.profitPercent}%</span></div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Cost Breakdown</h2>
              <div className="space-y-1 text-sm">
                {Object.entries(results.breakdown).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span>{currency.symbol}{value.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Batch Summary</h2>
              <div className="space-y-2">
                <div className="p-3 border rounded-md">
                  <p className="text-sm text-muted-foreground">Total Batch Cost</p>
                  <p className="text-xl font-bold">{currency.symbol}{results.totalCost.toFixed(2)}</p>
                </div>
                <div className="p-3 border rounded-md bg-primary/10">
                  <p className="text-sm text-primary">Total Batch Profit</p>
                  <p className="text-xl font-bold text-primary">{currency.symbol}{results.totalProfit.toFixed(2)}</p>
                </div>
                <div className="p-3 border rounded-md">
                  <p className="text-sm text-muted-foreground">Batch Quantity</p>
                  <p className="text-xl font-bold">{values.quantity} pieces</p>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Profit Analysis</h2>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Profit Margin:</span> <span className="font-semibold">{values.profitPercent}%</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Profit per Unit:</span> <span className="font-semibold">{currency.symbol}{results.profitPerPiece.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">ROI per Batch:</span> <span className="font-semibold">{((results.totalProfit / results.totalCost) * 100).toFixed(1)}%</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 pt-4 border-t">
          <div className="p-4 border rounded-lg flex-grow min-w-[300px]">
            <h2 className="text-lg font-semibold mb-2">Yield & Forecasting</h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Yield Efficiency:</span> 
                <span className="font-semibold">
                  {values.piecesProduced > 0 ? `${((1.5 / (values.totalFabricUsed / values.piecesProduced)) * 100).toFixed(0)}%` : 'N/A'}
                </span>
              </div>
              {/* Add forecast table here */}
            </div>
          </div>
          {plan === 'pro' && qrCodeUrl && (
            <div className="p-4 border rounded-lg text-center flex-grow min-w-[300px]">
              <h2 className="text-lg font-semibold mb-2">Scan to Reload</h2>
              <img src={qrCodeUrl} alt="QR Code" className="mx-auto w-24 h-24" />
            </div>
          )}
        </div>

        <div className="text-center text-xs text-muted-foreground pt-4 border-t mt-4">
          <p>Calcoz {new Date().getFullYear()} - Enhanced PDF Report</p>
        </div>
      </div>
    </div>
  );
}
