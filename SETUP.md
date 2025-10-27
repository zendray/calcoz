# Calcoz Setup Instructions

## Quick Start Guide

### Step 1: Install Node.js

If you don't have Node.js installed, download and install it from:
- **Official Website**: https://nodejs.org/ (Download LTS version)
- **Recommended Version**: Node.js 18.x or higher

After installation, verify by opening a terminal/command prompt and running:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

Open a terminal in the `calcoz` folder and run:

```bash
npm install
```

This will install all required packages (~500MB). It may take 2-5 minutes depending on your internet speed.

### Step 3: Run Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
- Local:        http://localhost:3000
- Ready in 2.3s
```

### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

You should see the Calcoz application running with demo data prefilled!

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

The production server will run on `http://localhost:3000`

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is occupied, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors

If you see module errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

The project uses TypeScript. Most errors will be caught during development. To check for type errors:
```bash
npx tsc --noEmit
```

## Project Features

✅ **Intuitive Per-Piece Costing** - Input costs for fabric, tailoring, washing, etc.
✅ **Smart Overhead Distribution** - Automatically prorate fixed costs
✅ **Real-time Calculations** - Instant updates as you type
✅ **Beautiful Visualizations** - Pie charts, bar charts, cost breakdowns
✅ **Multi-Currency Support** - INR, USD, EUR, GBP, AED
✅ **PDF Export** - Generate professional reports
✅ **Apple-Grade Design** - Smooth animations, premium UI
✅ **Fully Responsive** - Works on mobile and desktop

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - Beautiful UI components
- **Recharts** - Chart library
- **html2canvas + jsPDF** - PDF export

## File Structure

```
calcoz/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── Header.tsx        # App header
│   ├── InputSection.tsx  # Input form
│   ├── ResultCard.tsx    # Results display
│   ├── CostBreakdownChart.tsx  # Charts
│   └── ExportButton.tsx  # PDF export
├── utils/                # Utility functions
│   ├── calculations.ts   # Costing logic
│   ├── currency.ts       # Currency utilities
│   └── export.ts         # PDF export
└── lib/                  # Helper functions
    └── utils.ts          # cn() helper
```

## Demo Data

The app comes with prefilled demo data:
- **Fabric**: 1.8 meters @ ₹150/meter = ₹270
- **Jobber**: ₹45/piece
- **Washing**: ₹20/piece
- **Press & Pack**: ₹15/piece
- **Accessories**: ₹25/piece
- **Monthly Overheads**: ₹50,000
- **Production Volume**: 1,000 pieces/month
- **Batch Quantity**: 500 pieces
- **Profit Margin**: 25%

**Total Cost Per Piece**: ₹425
**Suggested Price**: ₹531.25
**Profit Per Piece**: ₹106.25

## Customization

### Change Currency

Click the currency selector in the header to switch between INR, USD, EUR, GBP, and AED.

### Adjust Inputs

- Use text inputs for precise values
- Use sliders for batch quantity (1-10,000) and profit margin (0-100%)
- All calculations update in real-time

### Export Report

Click "Export as PDF" to generate a professional cost report with all visualizations.

## Support

For questions or issues:
1. Check the README.md file
2. Review the code comments
3. Open an issue on the repository

---

**Happy Costing!** 🚀

✅ Calcoz built — PREMIUM APPLE-DESIGNED CLOTHING CALCULATOR ACHIEVED 📱✨
