'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import ResultCard from '@/components/ResultCard';
import CostBreakdownChart from '@/components/CostBreakdownChart';
import ExportButton from '@/components/ExportButton';
import PDFDashboard from '@/components/PDFDashboard';
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

  useEffect(() => {
    console.log('✅ Calcoz built — PREMIUM APPLE-DESIGNED CLOTHING CALCULATOR ACHIEVED 📱✨');
    
    // Only prevent backspace navigation when not in input
    const preventBackspaceNav = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
      
      if (e.key === 'Backspace' && !isInput) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', preventBackspaceNav);
    
    return () => {
      document.removeEventListener('keydown', preventBackspaceNav);
    };
  }, []);

  const handleChange = useCallback((field: string, value: number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleCurrencyChange = useCallback((code: string) => {
    setCurrency(getCurrencyByCode(code));
  }, []);

  const handleCalculate = useCallback(() => {
    const calculatedResults = calculateCosts(values);
    setResults(calculatedResults);
    setIsCalculated(true);
  }, [values]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Header currency={currency} onCurrencyChange={handleCurrencyChange} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Main Content */}
        <div 
          id="export-content" 
          className="space-y-8 bg-white p-6 md:p-8 rounded-3xl shadow-2xl"
        >
          {/* Design Number Section */}
          <section className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border-2 border-indigo-100">
            <label htmlFor="designNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              Design Number / Reference
            </label>
            <input
              id="designNumber"
              type="text"
              value={designNumber}
              onChange={(e) => {
                setDesignNumber(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              placeholder="e.g., DESIGN-001, SHIRT-A1, TROUSER-XYZ"
              className="w-full h-12 rounded-xl border-2 border-indigo-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              autoComplete="off"
            />
            <p className="mt-2 text-xs text-gray-500">
              This will be used in the PDF filename and helps you identify this calculation
            </p>
          </section>

          {/* Input Section */}
          <section>
            <InputSection
              values={values}
              onChange={handleChange}
              currencySymbol={currency.symbol}
            />
          </section>

          {/* Calculate Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={handleCalculate}
              className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95 transition-all duration-200"
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate Cost
              </span>
            </button>
          </motion.div>

          {/* Results Section - Only show after calculation */}
          {isCalculated && results && (
            <>
              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              />

              {/* Results Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ResultCard results={results} currency={currency} />
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              />

              {/* Charts Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Visual Breakdown
                </h2>
                <CostBreakdownChart breakdown={results.breakdown} currency={currency} />
              </motion.section>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              />

            </>
          )}
        </div>

        {/* PDF Dashboard - Hidden on screen, shown in PDF */}
        {isCalculated && results && (
          <div id="pdf-dashboard" className="hidden">
            <PDFDashboard
              designNumber={designNumber}
              values={values}
              results={results}
              currency={currency}
            />
          </div>
        )}

        {/* Export Button Outside - Hidden in PDF */}
        {isCalculated && results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-8 no-export"
          >
            <ExportButton elementId="pdf-dashboard" designNumber={designNumber} />
          </motion.div>
        )}

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-lg">
              Start calculating smarter. Upgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">₹200</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-600">For growing businesses</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Unlimited cost calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Save & organize calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Export professional PDFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Email support</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                Upgrade to Starter
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border-2 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  PRO
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">₹500</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-600">For power users</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Pre-built cost templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Fabric purchase forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Priority support & training</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </motion.div>

        {/* Premium CTA Section */}
        {isCalculated && results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Save 10+ Hours Every Week
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Join 10,000+ manufacturers who trust Calcoz for accurate costing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                  <div className="text-3xl font-bold text-white">₹999</div>
                  <div className="text-sm text-white/80">per month</div>
                </div>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  Start Free Trial
                </button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
              </p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm pb-8"
        >
          <p className="font-medium">
            Trusted by leading manufacturers worldwide
          </p>
          <p className="mt-2">
            Calcoz © {new Date().getFullYear()} • Enterprise-Grade Costing Platform
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
