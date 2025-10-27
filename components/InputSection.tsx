'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Scissors, Droplet, Wind, Package, DollarSign, TrendingUp, Users } from 'lucide-react';

interface InputSectionProps {
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
  onChange: (field: string, value: number) => void;
  currencySymbol: string;
}

// Move InputField OUTSIDE to prevent recreation on every render
const InputField = React.memo(({
  label,
  field,
  icon: Icon,
  suffix,
  value,
  onChange,
}: {
  label: string;
  field: string;
  icon: any;
  suffix?: string;
  value: number;
  onChange: (field: string, value: number) => void;
}) => (
  <div className="space-y-2">
    <Label htmlFor={field} className="flex items-center gap-2 text-gray-700">
      <Icon className="w-4 h-4 text-blue-500" />
      {label}
    </Label>
    <div className="relative">
      <Input
        id={field}
        type="number"
        value={value === 0 ? '' : value}
        onChange={(e) => {
          const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
          onChange(field, isNaN(val) ? 0 : val);
        }}
        onKeyDown={(e) => {
          // Only prevent Enter from submitting
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
        className="pr-12 text-gray-900 font-semibold text-lg"
        step="0.01"
        autoComplete="off"
        placeholder="0"
      />
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none">
          {suffix}
        </span>
      )}
    </div>
  </div>
));

InputField.displayName = 'InputField';

const InputSection = React.memo(function InputSection({ values, onChange, currencySymbol }: InputSectionProps) {

  return (
    <div className="space-y-6">
      {/* Direct Per-Piece Costs */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 border-2 border-blue-100 shadow-lg shadow-blue-500/10">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Scissors className="w-6 h-6 text-blue-500" />
          Direct Per-Piece Costs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Total Fabric Used (meters)"
            field="totalFabricUsed"
            icon={Scissors}
            suffix="m"
            value={values.totalFabricUsed}
            onChange={onChange}
          />
          <InputField
            label="Pieces Produced"
            field="piecesProduced"
            icon={Package}
            suffix="pcs"
            value={values.piecesProduced}
            onChange={onChange}
          />
          <InputField
            label={`Fabric Cost (${currencySymbol}/meter)`}
            field="fabricCostPerMeter"
            icon={DollarSign}
            suffix={currencySymbol}
            value={values.fabricCostPerMeter}
            onChange={onChange}
          />
          <InputField
            label={`Jobber/Tailoring (${currencySymbol}/piece)`}
            field="jobberCostPerPiece"
            icon={Scissors}
            suffix={currencySymbol}
            value={values.jobberCostPerPiece}
            onChange={onChange}
          />
          <InputField
            label={`Washing (${currencySymbol}/piece)`}
            field="washingCostPerPiece"
            icon={Droplet}
            suffix={currencySymbol}
            value={values.washingCostPerPiece}
            onChange={onChange}
          />
          <InputField
            label={`Press & Packing (${currencySymbol}/piece)`}
            field="pressPackingCostPerPiece"
            icon={Wind}
            suffix={currencySymbol}
            value={values.pressPackingCostPerPiece}
            onChange={onChange}
          />
          <InputField
            label={`Accessories (${currencySymbol}/piece)`}
            field="accessoriesCostPerPiece"
            icon={Package}
            suffix={currencySymbol}
            value={values.accessoriesCostPerPiece}
            onChange={onChange}
          />
        </div>
      </div>

      {/* Overheads & Batch Details */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-6 border-2 border-purple-100 shadow-lg shadow-purple-500/10">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-500" />
          Overheads & Batch Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label={`Monthly Overheads (${currencySymbol})`}
            field="monthlyFixed"
            icon={DollarSign}
            suffix={currencySymbol}
            value={values.monthlyFixed}
            onChange={onChange}
          />
          <InputField
            label="Monthly Production Volume (pieces)"
            field="monthlyProduction"
            icon={Users}
            suffix="pcs"
            value={values.monthlyProduction}
            onChange={onChange}
          />
        </div>

        {/* Batch Quantity Input */}
        <div className="mt-6">
          <InputField
            label="Batch Quantity (pieces)"
            field="quantity"
            icon={Package}
            suffix="pcs"
            value={values.quantity}
            onChange={onChange}
          />
        </div>

        {/* Profit Percentage Slider */}
        <div className="mt-6 space-y-3">
          <Label className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-gray-700">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Desired Profit Margin
            </span>
            <span className="text-2xl font-bold text-green-600">{values.profitPercent}%</span>
          </Label>
          <Slider
            value={[values.profitPercent]}
            onValueChange={(val: number[]) => onChange('profitPercent', val[0])}
            min={0}
            max={100}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-gray-500 font-medium">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default InputSection;
