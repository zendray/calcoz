# 🚀 Calcoz - Quick Start Guide

## ⚡ 3-Step Installation

### Step 1: Install Node.js (if needed)
Download from: **https://nodejs.org/** (LTS version)

### Step 2: Install Dependencies
```bash
npm install
```
*Takes 2-5 minutes, downloads ~500MB*

### Step 3: Run the App
```bash
npm run dev
```
*Open http://localhost:3000 in your browser*

---

## 🎯 What You Get

### Premium Features
- ✅ **Per-Piece Costing** - Fabric, jobber, washing, accessories
- ✅ **Smart Overheads** - Automatic distribution across production
- ✅ **Real-Time Calc** - Instant updates as you type
- ✅ **Multi-Currency** - INR, USD, EUR, GBP, AED
- ✅ **Visual Charts** - Pie, bar, and detailed breakdowns
- ✅ **PDF Export** - Professional cost reports
- ✅ **Apple Design** - Smooth animations, premium UI
- ✅ **Mobile Ready** - Works perfectly on phones

### Demo Data (Prefilled)
```
Fabric: 1.8m @ ₹150/m = ₹270
Jobber: ₹45 | Washing: ₹20
Press: ₹15 | Accessories: ₹25
Overheads: ₹50,000/month ÷ 1,000 pcs = ₹50/pc

Cost Per Piece: ₹425
Selling Price: ₹531.25 (25% profit)
Profit: ₹106.25 per piece
```

---

## 📱 How to Use

### 1. Enter Your Costs
- **Fabric**: Input meters per piece and cost per meter
- **Direct Costs**: Jobber, washing, press, accessories
- **Overheads**: Monthly fixed costs and production volume

### 2. Adjust Settings
- **Batch Quantity**: Use slider (1-10,000 pieces)
- **Profit Margin**: Use slider (0-100%)
- **Currency**: Select from dropdown in header

### 3. View Results
- **Cost Per Piece**: Your manufacturing cost
- **Suggested Price**: With your profit margin
- **Profit Per Piece**: Your earnings
- **Batch Totals**: Complete batch cost and profit

### 4. Analyze Breakdown
- **Pie Chart**: Visual cost distribution
- **Bar Chart**: Comparative breakdown
- **Detailed List**: Line-by-line costs

### 5. Export Report
- Click **"Export as PDF"** button
- Professional report with all charts
- Timestamped filename

---

## 🎨 Design Highlights

### Apple-Grade Quality
- **8pt Grid Spacing** - Even, rhythmic layout
- **Spring Animations** - Smooth, natural motion
- **Semantic Colors** - Blue (inputs), green (profits)
- **Premium Typography** - SF Pro-inspired fonts
- **Tactile Feedback** - Buttons respond to touch
- **Gradient Accents** - Beautiful color transitions

### Mobile-First
- **Single Column** - Easy vertical scrolling
- **Large Touch Targets** - 44px minimum
- **Readable Fonts** - 17px base size
- **Clear Sections** - Obvious dividers
- **Responsive Charts** - Adapt to screen

---

## 🛠️ Commands

```bash
# Development (hot reload)
npm run dev

# Production build
npm run build

# Production server
npm start

# Code linting
npm run lint
```

---

## 🌐 Deploy

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
*Free tier, automatic HTTPS, global CDN*

### Netlify
```bash
npm run build
netlify deploy --prod
```

### Self-Hosted
```bash
npm run build
npm start
# Runs on port 3000
```

---

## 🔧 Customize

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: "hsl(221.2 83.2% 53.3%)" }, // Blue
  // Change to your brand color
}
```

### Change Demo Values
Edit `app/page.tsx`:
```typescript
const [values, setValues] = useState({
  fabricConsumptionPerPiece: 1.8, // Your value
  fabricCostPerMeter: 150,         // Your value
  // ...
});
```

### Add Logo
Edit `components/Header.tsx`:
```typescript
// Replace calculator icon with your logo
<img src="/logo.png" alt="Logo" />
```

### Adjust Exchange Rates
Edit `utils/currency.ts`:
```typescript
{ code: 'USD', symbol: '$', rate: 0.012 }, // Update rate
```

---

## 📚 Documentation

- **README.md** - Full project overview
- **INSTALL_GUIDE.md** - Detailed installation
- **PROJECT_SUMMARY.md** - Technical architecture
- **VISUAL_GUIDE.md** - Design specifications
- **COMPLETION_SUMMARY.md** - Feature checklist

---

## ❓ Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Module errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?
```bash
npx tsc --noEmit
```
*Most are informational and won't prevent running*

---

## 💡 Tips

1. **Start Simple** - Use demo data first
2. **Test Mobile** - Check on your phone
3. **Try Sliders** - Interactive batch and profit controls
4. **Switch Currency** - See automatic conversion
5. **Export PDF** - Generate professional reports
6. **Customize** - Make it yours!

---

## 🎯 Perfect For

- 👔 **Clothing Manufacturers** - Trousers, shirts, dresses
- 👶 **Kids Wear Makers** - Accurate per-piece costing
- 🏭 **Garment Factories** - Batch production planning
- 📊 **Cost Analysts** - Quick pricing calculations
- 💼 **Business Owners** - Profit margin analysis

---

## 🏆 Why Calcoz?

✅ **Accurate** - Per-piece first approach
✅ **Fast** - Real-time calculations
✅ **Beautiful** - Apple-grade design
✅ **Smart** - Automatic overhead distribution
✅ **Visual** - Charts and graphs
✅ **Exportable** - PDF reports
✅ **Responsive** - Works everywhere
✅ **Free** - MIT License

---

## 📞 Need Help?

1. Check the documentation files
2. Review code comments
3. Open an issue on GitHub
4. Contact support

---

## ✅ Ready to Start?

```bash
npm install
npm run dev
```

**Open http://localhost:3000 and start costing!** 🚀

---

**✅ Calcoz built — PREMIUM APPLE-DESIGNED CLOTHING CALCULATOR ACHIEVED 📱✨**

Built with precision for clothing manufacturers worldwide 💼
