'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CostSensitivitySlider() {
  const [selectedCost, setSelectedCost] = useState('fabricCostPerMeter');
  const [adjustment, setAdjustment] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Sensitivity Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Select Cost Component</Label>
          <Select value={selectedCost} onValueChange={setSelectedCost}>
            <SelectTrigger>
              <SelectValue placeholder="Select a cost component" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fabricCostPerMeter">Fabric Cost</SelectItem>
              <SelectItem value="jobberCostPerPiece">Jobber Cost</SelectItem>
              <SelectItem value="washingCostPerPiece">Washing Cost</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Adjustment</Label>
            <span className="font-semibold">{adjustment}%</span>
          </div>
          <Slider value={[adjustment]} onValueChange={(val) => setAdjustment(val[0])} min={-50} max={50} step={1} />
        </div>
      </CardContent>
    </Card>
  );
}
