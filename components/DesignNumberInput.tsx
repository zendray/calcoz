'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface DesignNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DesignNumberInput({ value, onChange }: DesignNumberInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="designNumber">Design Number</Label>
      <Input
        id="designNumber"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., DN-250429-001"
      />
      <p className="text-sm text-muted-foreground">
        An auto-generated, unique identifier for your design.
      </p>
    </div>
  );
}
