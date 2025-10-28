'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingModalProps {
  onPlanSelect: (plan: 'basic' | 'pro') => void;
}

export default function PricingModal({ onPlanSelect }: PricingModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">Choose Your Plan</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <CardTitle>Basic</CardTitle>
              <p className="text-4xl font-bold">₹249</p>
              <p className="text-muted-foreground">Smart costing + forecasting</p>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button className="w-full" onClick={() => onPlanSelect('basic')}>
                Get Basic
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col border-primary relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle>Pro</CardTitle>
              <p className="text-4xl font-bold">₹500</p>
              <p className="text-muted-foreground">All features, unlimited potential</p>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button className="w-full" onClick={() => onPlanSelect('pro')}>
                Get Pro
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
