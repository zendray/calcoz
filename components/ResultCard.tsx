'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, DollarSign, Package, Target } from 'lucide-react';
import { CostResults } from '@/utils/calculations';
import { Currency } from '@/utils/currency';

interface ResultCardProps {
  results: CostResults;
  currency: Currency;
}

export default function ResultCard({ results, currency }: ResultCardProps) {
  const formatAmount = (amount: number) => {
    const converted = amount * currency.rate;
    return `${currency.symbol}${converted.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const ResultItem = ({
    icon: Icon,
    label,
    value,
    gradient,
    index,
  }: {
    icon: any;
    label: string;
    value: string;
    gradient: string;
    index: number;
  }) => (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={`${gradient} border-0 shadow-xl overflow-hidden`}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                <Icon className="w-4 h-4" />
                {label}
              </div>
              <div className="text-3xl font-bold text-white">{value}</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold text-gray-900 mb-6"
      >
        Cost Analysis
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultItem
          icon={DollarSign}
          label="Cost Per Piece"
          value={formatAmount(results.costPerPiece)}
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
          index={0}
        />
        <ResultItem
          icon={Target}
          label="Suggested Selling Price"
          value={formatAmount(results.suggestedPrice)}
          gradient="bg-gradient-to-br from-green-500 to-green-600"
          index={1}
        />
        <ResultItem
          icon={TrendingUp}
          label="Profit Per Piece"
          value={formatAmount(results.profitPerPiece)}
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
          index={2}
        />
        <ResultItem
          icon={Package}
          label="Total Batch Cost"
          value={formatAmount(results.totalCost)}
          gradient="bg-gradient-to-br from-orange-500 to-orange-600"
          index={3}
        />
      </div>

      {/* Profit Margin Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-6"
      >
        <Card className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">Total Batch Profit</span>
              <span className="text-3xl font-bold text-emerald-600">
                {formatAmount(results.totalProfit)}
              </span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((results.totalProfit / (results.totalCost + results.totalProfit)) * 100, 100)}%` }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
