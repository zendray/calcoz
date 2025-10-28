'use client';

import { useState, useCallback, useEffect } from 'react';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import ResultCard from '@/components/ResultCard';
import CostBreakdownChart from '@/components/CostBreakdownChart';
import ExportButton from '@/components/ExportButton';
import PDFDashboard from '@/components/PDFDashboard';
import Footer from '@/components/Footer';
import PricingModal from '@/components/PricingModal';
import SavedSection from '@/components/SavedSection';
import BatchProfitSimulator from '@/components/BatchProfitSimulator';
import SmartWarnings from '@/components/SmartWarnings';
import ProDashboard from '@/components/ProDashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculateCosts, CostResults } from '@/utils/calculations';
import { getCurrencyByCode, Currency } from '@/utils/currency';

export default function Home() {
  const [currency, setCurrency] = useState<Currency>(getCurrencyByCode('INR'));
  const [designNumber, setDesignNumber] = useState('');
  const [values, setValues] = useState({
    totalFabricUsed: 0,
    piecesProduced: 0,
    fabricCostPerMeter: 0,
    jobberCostPerPiece: 0,
    washingCostPerPiece: 0,
    pressPackingCostPerPiece: 0,
    accessoriesCostPerPiece: 0,
    monthlyFixed: 0,
    monthlyProduction: 0,
    quantity: 0,
    profitPercent: 25,
  });

  const [results, setResults] = useState<CostResults | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [plan, setPlan] = useState<'basic' | 'pro' | null>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  useEffect(() => {
    const savedPlan = localStorage.getItem('calcoz_plan') as 'basic' | 'pro' | null;
    if (savedPlan) {
      setPlan(savedPlan);
    }

    // Auto-generate design number
    const today = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const savedDesigns = JSON.parse(localStorage.getItem('calcoz_designs') || '[]');
    const seq = (savedDesigns.length + 1).toString().padStart(3, '0');
    setDesignNumber(`DN-${today}-${seq}`);

    console.log('CALCOZ PREMIUM LIVE — ₹249 & ₹500 Plans | Design Number | Consistent UI | All Features Added');
  }, []);

  const handlePlanSelect = (selectedPlan: 'basic' | 'pro') => {
    localStorage.setItem('calcoz_plan', selectedPlan);
    setPlan(selectedPlan);
  };

  const handleChange = useCallback((field: string, value: number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleCurrencyChange = useCallback((code: string) => {
    setCurrency(getCurrencyByCode(code));
  }, []);

  const handleLoadTemplate = (templateValues: any) => {
    setValues(templateValues);
    setActiveTab('calculator');
  };

  const handleCalculate = useCallback(() => {
    const calculatedResults = calculateCosts(values);
    setResults(calculatedResults);
    setIsCalculated(true);
  }, [values]);

  if (!plan) {
    return <PricingModal onPlanSelect={handlePlanSelect} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header currency={currency} onCurrencyChange={handleCurrencyChange} />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className={`grid w-full ${plan === 'pro' ? 'grid-cols-3' : 'grid-cols-2'}`}>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="saved">Templates</TabsTrigger>
            {plan === 'pro' && <TabsTrigger value="dashboard">Dashboard</TabsTrigger>}
          </TabsList>
          <TabsContent value="calculator" className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">Clothing Cost Calculator</h1>
              <p className="text-muted-foreground">
                An enterprise-grade tool to accurately calculate your apparel production costs.
              </p>
            </div>

            <InputSection
              values={values}
              onChange={handleChange}
              currencySymbol={currency.symbol}
              designNumber={designNumber}
              onDesignNumberChange={setDesignNumber}
            />

            <div className="flex justify-center">
              <Button size="lg" onClick={handleCalculate} disabled={!designNumber.trim()}>
                Calculate Cost
              </Button>
            </div>

            {isCalculated && results && (
              <div id="results-section" className="space-y-8">
                <SmartWarnings results={results} profitPercent={values.profitPercent} />
                <ResultCard 
                  results={results} 
                  currency={currency} 
                  totalFabricUsed={values.totalFabricUsed}
                  piecesProduced={values.piecesProduced}
                />
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold text-center mb-4">Visual Breakdown</h2>
                    <CostBreakdownChart breakdown={results.breakdown} currency={currency} />
                  </CardContent>
                </Card>
                <div className="flex justify-center no-export">
                  <ExportButton elementId="pdf-dashboard" designNumber={designNumber} />
                </div>
                <BatchProfitSimulator results={results} currency={currency} quantity={values.quantity} />
              </div>
            )}

            {isCalculated && results && (
              <div id="pdf-dashboard" className="hidden">
                <PDFDashboard
                  designNumber={designNumber}
                  values={values}
                  results={results}
                  currency={currency}
                  plan={plan}
                />
              </div>
            )}
          </TabsContent>
          <TabsContent value="saved">
            <SavedSection 
              plan={plan}
              currentValues={values}
              onLoadTemplate={handleLoadTemplate}
            />
          </TabsContent>
          {plan === 'pro' && (
            <TabsContent value="dashboard">
              <ProDashboard />
            </TabsContent>
          )}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
