'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DesignNumberInput from './DesignNumberInput';
import CostSensitivitySlider from './CostSensitivitySlider';

interface InputSectionProps {
  designNumber: string;
  onDesignNumberChange: (value: string) => void;
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

const InputField = React.memo(
  ({
    label,
    field,
    suffix,
    value,
    onChange,
  }: {
    label: string;
    field: string;
    suffix?: string;
    value: number;
    onChange: (field: string, value: number) => void;
  }) => (
    <div className="space-y-2">
      <Label htmlFor={field}>{label}</Label>
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
            if (e.key === 'Enter') e.preventDefault();
          }}
          className="pr-12"
          step="0.01"
          autoComplete="off"
          placeholder="0"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
);

InputField.displayName = 'InputField';

const InputSection = React.memo(function InputSection({ values, onChange, currencySymbol, designNumber, onDesignNumberChange }: InputSectionProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <DesignNumberInput value={designNumber} onChange={onDesignNumberChange} />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Direct Per-Piece Costs</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Total Fabric Used"
            field="totalFabricUsed"
            suffix="m"
            value={values.totalFabricUsed}
            onChange={onChange}
          />
          <InputField
            label="Pieces Produced"
            field="piecesProduced"
            suffix="pcs"
            value={values.piecesProduced}
            onChange={onChange}
          />
          <InputField
            label={`Fabric Cost (${currencySymbol}/meter)`}
            field="fabricCostPerMeter"
            suffix={currencySymbol}
            value={values.fabricCostPerMeter}
            onChange={onChange}
          />
          <InputField
            label={`Jobber/Tailoring (${currencySymbol}/piece)`}
            field="jobberCostPerPiece"
            suffix={currencySymbol}
            value={values.jobberCostPerPiece}
            onChange={onChange}
          />
          <InputField
            label={`Washing (${currencySymbol}/piece)`}
            field="washingCostPerPiece"
            suffix={currencySymbol}
            value={values.washingCostPerPiece}
            onChange={onChange}
          />
          <InputField
            label={`Press & Packing (${currencySymbol}/piece)`}
            field="pressPackingCostPerPiece"
            suffix={currencySymbol}
            value={values.pressPackingCostPerPiece}
            onChange={onChange}
          />
          <InputField
            label={`Accessories (${currencySymbol}/piece)`}
            field="accessoriesCostPerPiece"
            suffix={currencySymbol}
            value={values.accessoriesCostPerPiece}
            onChange={onChange}
          />
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Overheads & Batch Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label={`Monthly Overheads (${currencySymbol})`}
              field="monthlyFixed"
              suffix={currencySymbol}
              value={values.monthlyFixed}
              onChange={onChange}
            />
            <InputField
              label="Monthly Production Volume"
              field="monthlyProduction"
              suffix="pcs"
              value={values.monthlyProduction}
              onChange={onChange}
            />
            <InputField
              label="Batch Quantity"
              field="quantity"
              suffix="pcs"
              value={values.quantity}
              onChange={onChange}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Desired Profit Margin</Label>
                <span className="text-lg font-semibold">{values.profitPercent}%</span>
              </div>
              <Slider
                value={[values.profitPercent]}
                onValueChange={(val: number[]) => onChange('profitPercent', val[0])}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fabric Price Forecasting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="forecast-mode">Forecast Mode</Label>
              <Switch id="forecast-mode" />
            </div>
            <div className="space-y-2">
              <Label>Forecasted Price Adjustment</Label>
              <Slider defaultValue={[0]} min={-50} max={50} step={1} />
            </div>
          </CardContent>
        </Card>

        <CostSensitivitySlider />

      </div>
    </div>
    </div>
  );
});

export default InputSection;
