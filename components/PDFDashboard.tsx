'use client';

import { CostResults } from '@/utils/calculations';
import { Currency } from '@/utils/currency';

interface PDFDashboardProps {
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

export default function PDFDashboard({ designNumber, values, results, currency }: PDFDashboardProps) {
  const fabricConsumption = values.piecesProduced > 0 
    ? (values.totalFabricUsed / values.piecesProduced).toFixed(2) 
    : '0.00';

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8 min-h-screen">
      <div className="max-w-[1100px] mx-auto space-y-6">
        {/* Premium Header with Gradient */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight">COST ANALYSIS</h1>
                <p className="text-xl text-white/90 font-semibold">Design: {designNumber || 'Untitled'}</p>
              </div>
              <div className="text-right">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                  <p className="text-sm text-white/80 font-medium">Generated</p>
                  <p className="text-lg text-white font-bold">{new Date().toLocaleDateString('en-IN')}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Hero Metrics - 3 Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Cost Per Piece */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-sm text-slate-400 font-medium mb-2">COST PER PIECE</p>
              <p className="text-4xl font-black text-white mb-1">{currency.symbol}{results.costPerPiece.toFixed(2)}</p>
              <p className="text-xs text-slate-400">Manufacturing cost</p>
            </div>
          </div>

          {/* Suggested Price */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-sm text-blue-100 font-medium mb-2">SUGGESTED PRICE</p>
              <p className="text-4xl font-black text-white mb-1">{currency.symbol}{results.suggestedPrice.toFixed(2)}</p>
              <p className="text-xs text-blue-100">Selling price</p>
            </div>
          </div>

          {/* Profit Per Piece */}
          <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-sm text-emerald-100 font-medium mb-2">PROFIT PER PIECE</p>
              <p className="text-4xl font-black text-white mb-1">{currency.symbol}{results.profitPerPiece.toFixed(2)}</p>
              <p className="text-xs text-emerald-100">{values.profitPercent}% margin</p>
            </div>
          </div>
        </div>

        {/* Main Grid - 2 Columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Inputs */}
          <div className="space-y-4">
            {/* Input Data Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Input Data</h2>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Total Fabric Used</span>
                  <span className="text-slate-900 font-bold">{values.totalFabricUsed} m</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Pieces Produced</span>
                  <span className="text-slate-900 font-bold">{values.piecesProduced} pcs</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Fabric Consumption</span>
                  <span className="text-slate-900 font-bold">{fabricConsumption} m/pc</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Fabric Cost</span>
                  <span className="text-slate-900 font-bold">{currency.symbol}{values.fabricCostPerMeter}/m</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Jobber Cost</span>
                  <span className="text-slate-900 font-bold">{currency.symbol}{values.jobberCostPerPiece}/pc</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Washing Cost</span>
                  <span className="text-slate-900 font-bold">{currency.symbol}{values.washingCostPerPiece}/pc</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Press & Pack</span>
                  <span className="text-slate-900 font-bold">{currency.symbol}{values.pressPackingCostPerPiece}/pc</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Accessories</span>
                  <span className="text-slate-900 font-bold">{currency.symbol}{values.accessoriesCostPerPiece}/pc</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Monthly Overheads</span>
                  <span className="text-slate-900 font-bold">{currency.symbol}{values.monthlyFixed}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Monthly Production</span>
                  <span className="text-slate-900 font-bold">{values.monthlyProduction} pcs</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium text-sm">Batch Quantity</span>
                  <span className="text-slate-900 font-bold">{values.quantity} pcs</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600 font-medium text-sm">Profit Margin</span>
                  <span className="text-emerald-600 font-bold">{values.profitPercent}%</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Cost Breakdown</h2>
              </div>
              <div className="space-y-2.5">
                {Object.entries(results.breakdown).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-medium text-sm capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-slate-900 font-bold">
                      {currency.symbol}{value.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-4">

            {/* Batch Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Batch Summary</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
                  <p className="text-sm text-slate-600 mb-1">Total Batch Cost</p>
                  <p className="text-3xl font-black text-slate-900">
                    {currency.symbol}{results.totalCost.toFixed(2)}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-100 p-4 rounded-xl">
                  <p className="text-sm text-emerald-700 mb-1">Total Batch Profit</p>
                  <p className="text-3xl font-black text-emerald-600">
                    {currency.symbol}{results.totalProfit.toFixed(2)}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-4 rounded-xl">
                  <p className="text-sm text-blue-700 mb-1">Batch Quantity</p>
                  <p className="text-3xl font-black text-blue-600">
                    {values.quantity} pieces
                  </p>
                </div>
              </div>
            </div>

            {/* Profit Analysis Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Profit Analysis</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Profit Margin</span>
                  <span className="text-2xl font-black text-emerald-600">{values.profitPercent}%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Profit per Unit</span>
                  <span className="text-xl font-bold text-emerald-600">
                    {currency.symbol}{results.profitPerPiece.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600 font-medium">ROI per Batch</span>
                  <span className="text-xl font-bold text-emerald-600">
                    {((results.totalProfit / results.totalCost) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t-2 border-slate-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Generated by <span className="font-bold text-slate-700">Calcoz</span> - Premium Cost Calculator
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <p className="text-xs text-slate-500">Powered by AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
