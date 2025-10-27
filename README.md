# Calcoz - Premium Clothing Costing Calculator

A production-ready, Apple-grade web application for clothing manufacturers to calculate accurate per-piece and batch costs for apparel products.

## Features

- **Intuitive Per-Piece Costing**: Input fabric consumption, tailoring, washing, and other costs per piece
- **Smart Overhead Distribution**: Automatically prorate monthly fixed costs across production volume
- **Real-time Calculations**: Instant cost analysis with profit margin visualization
- **Beautiful Visualizations**: Interactive pie charts, bar charts, and cost breakdowns
- **Multi-Currency Support**: INR, USD, EUR, GBP, AED with automatic conversion
- **PDF Export**: Generate professional cost reports
- **Apple-Grade Design**: Smooth animations, tactile feedback, premium UI following iOS HIG
- **Fully Responsive**: Optimized for mobile and desktop with 8pt grid system

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Export**: html2canvas + jsPDF

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
calcoz/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main application page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── slider.tsx
│   │   ├── card.tsx
│   │   └── select.tsx
│   ├── Header.tsx          # App header with currency selector
│   ├── InputSection.tsx    # Cost input form with sliders
│   ├── ResultCard.tsx      # Results display cards
│   ├── CostBreakdownChart.tsx  # Pie and bar charts
│   └── ExportButton.tsx    # PDF export functionality
├── utils/
│   ├── calculations.ts     # Core costing logic
│   ├── currency.ts         # Currency conversion utilities
│   └── export.ts           # PDF export utilities
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## Usage

### Input Costs

1. **Direct Per-Piece Costs**: Enter fabric consumption, fabric cost per meter, jobber/tailoring, washing, press & packing, and accessories costs
2. **Overheads**: Input monthly fixed costs and production volume
3. **Batch Details**: Adjust batch quantity and desired profit margin using sliders

### View Results

- **Cost Per Piece**: Total manufacturing cost for one unit
- **Suggested Selling Price**: Price including your profit margin
- **Profit Per Piece**: Profit earned on each unit
- **Total Batch Cost**: Complete cost for the entire batch
- **Visual Breakdown**: Pie chart, bar chart, and detailed cost distribution

### Export Report

Click "Export as PDF" to generate a professional cost report with all calculations and visualizations.

## Design Philosophy

Calcoz follows Apple's Human Interface Guidelines (iOS 19+):

- **8pt Grid System**: 16px margins, 24px section spacing, 12px card padding
- **Spring-Based Animations**: 300ms durations, stiffness 300 for natural motion
- **Semantic Colors**: Blue for inputs, green for profits, purple for overheads
- **Typography**: SF Pro-inspired font stack with 17px base size
- **Tactile Feedback**: Scale transforms on tap, hover states, disabled states
- **Visual Hierarchy**: Clear information architecture with gradient accents

## Demo Data

The app comes prefilled with sample data for a clothing item:
- Fabric: 1.8 meters @ ₹150/meter
- Jobber: ₹45/piece
- Washing: ₹20/piece
- Press & Pack: ₹15/piece
- Accessories: ₹25/piece
- Monthly Overheads: ₹50,000
- Production Volume: 1,000 pieces/month
- Batch: 500 pieces
- Profit Margin: 25%

## License

MIT License - feel free to use for commercial projects

## Support

For issues or questions, please open an issue on the repository.

---

**Built with precision for clothing manufacturers worldwide** 🚀

✅ Calcoz built — PREMIUM APPLE-DESIGNED CLOTHING CALCULATOR ACHIEVED 📱✨
