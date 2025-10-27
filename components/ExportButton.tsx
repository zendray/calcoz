'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { exportToPDF } from '@/utils/export';

interface ExportButtonProps {
  elementId: string;
  designNumber: string;
}

export default function ExportButton({ elementId, designNumber }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const sanitizedDesign = designNumber.replace(/[^a-zA-Z0-9-_]/g, '-');
      const timestamp = new Date().toISOString().split('T')[0];
      await exportToPDF(elementId, `Calcoz_${sanitizedDesign}_${timestamp}.pdf`);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleExport}
        disabled={isExporting}
        size="lg"
        className="w-full md:w-auto gap-2 shadow-2xl shadow-blue-500/30"
      >
        {isExporting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating PDF...
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            Export as PDF
          </>
        )}
      </Button>
    </motion.div>
  );
}
