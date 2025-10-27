# Calcoz - Visual Design Guide

## App Layout Overview

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (Sticky, Backdrop Blur)                             │
│  ┌──────┐  Calcoz                        Currency: [INR ▼] │
│  │ 🧮  │  Clothing Costing Calculator                       │
│  └──────┘                                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         HERO SECTION                         │
│                                                              │
│         Smart Costing for Clothing Manufacturers            │
│                                                              │
│    Calculate accurate per-piece and batch costs with        │
│    precision. Designed for trousers, shirts, kids wear.     │
│                                                              │
│                                    [Export as PDF 📥]       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MAIN CONTENT CARD (White, Rounded, Shadow)                 │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  ✂️  Direct Per-Piece Costs (Blue Gradient)          │ │
│  │                                                        │ │
│  │  Fabric Consumption (m/piece)    Fabric Cost (₹/m)   │ │
│  │  [    1.8    ]                   [    150    ]        │ │
│  │                                                        │ │
│  │  Jobber/Tailoring (₹/piece)      Washing (₹/piece)   │ │
│  │  [     45    ]                   [     20    ]        │ │
│  │                                                        │ │
│  │  Press & Packing (₹/piece)       Accessories (₹/pc)  │ │
│  │  [     15    ]                   [     25    ]        │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  📈 Overheads & Batch Details (Purple Gradient)      │ │
│  │                                                        │ │
│  │  Monthly Overheads (₹)           Production Volume   │ │
│  │  [   50,000  ]                   [    1,000   ] pcs  │ │
│  │                                                        │ │
│  │  📦 Batch Quantity                            500     │ │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │ │
│  │  1                                           10,000   │ │
│  │                                                        │ │
│  │  📊 Desired Profit Margin                      25%    │ │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │ │
│  │  0%                                            100%   │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  COST ANALYSIS                                               │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ 💰 Cost Per Piece   │  │ 🎯 Suggested Price  │        │
│  │                      │  │                      │        │
│  │     ₹425.00         │  │     ₹531.25         │        │
│  │                      │  │                      │        │
│  │ (Blue Gradient)      │  │ (Green Gradient)     │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ 📈 Profit Per Piece │  │ 📦 Total Batch Cost │        │
│  │                      │  │                      │        │
│  │     ₹106.25         │  │    ₹212,500.00      │        │
│  │                      │  │                      │        │
│  │ (Purple Gradient)    │  │ (Orange Gradient)    │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Total Batch Profit              ₹53,125.00          │ │
│  │  ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │ │
│  │  (Emerald Gradient Card with Progress Bar)            │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  VISUAL BREAKDOWN                                            │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │  Cost Distribution   │  │  Cost Breakdown      │        │
│  │                      │  │                      │        │
│  │      ╱───╲          │  │   ▐█████████▌       │        │
│  │     │ 🥧 │         │  │   ▐████▌            │        │
│  │      ╲───╱          │  │   ▐███▌             │        │
│  │                      │  │   ▐██▌              │        │
│  │  (Pie Chart)         │  │   ▐█▌               │        │
│  │                      │  │   ▐▌                │        │
│  │  Legend:             │  │                      │        │
│  │  ● Fabric            │  │  (Bar Chart)         │        │
│  │  ● Jobber            │  │                      │        │
│  │  ● Washing           │  │  X-Axis: Categories  │        │
│  │  ● Press & Pack      │  │  Y-Axis: Amount      │        │
│  │  ● Accessories       │  │                      │        │
│  │  ● Overheads         │  │                      │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Detailed Breakdown                                   │ │
│  │                                                        │ │
│  │  ● Fabric                              ₹270.00       │ │
│  │  ● Jobber                              ₹45.00        │ │
│  │  ● Washing                             ₹20.00        │ │
│  │  ● Press & Pack                        ₹15.00        │ │
│  │  ● Accessories                         ₹25.00        │ │
│  │  ● Overheads                           ₹50.00        │ │
│  │                                                        │ │
│  │  (Color-coded list with hover effects)                │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                          FOOTER                              │
│                                                              │
│      Built with precision for clothing manufacturers        │
│                      worldwide                               │
│                                                              │
│           Calcoz © 2025 • Powered by Next.js               │
└─────────────────────────────────────────────────────────────┘
```

## Color Palette

### Primary Colors
```
Blue (Inputs):        #3b82f6  ████████
Green (Profits):      #10b981  ████████
Purple (Overheads):   #8b5cf6  ████████
Orange (Batch):       #f59e0b  ████████
Red (Overheads):      #ef4444  ████████
```

### Neutral Colors
```
Gray 50:   #f9fafb  ████████  (Backgrounds)
Gray 100:  #f3f4f6  ████████  (Hover states)
Gray 200:  #e5e7eb  ████████  (Borders)
Gray 500:  #6b7280  ████████  (Secondary text)
Gray 700:  #374151  ████████  (Labels)
Gray 900:  #111827  ████████  (Primary text)
White:     #ffffff  ████████  (Cards)
```

### Gradient Examples
```
Blue Gradient:    from-blue-500 to-blue-600
Green Gradient:   from-green-500 to-green-600
Purple Gradient:  from-purple-500 to-purple-600
Orange Gradient:  from-orange-500 to-orange-600
Emerald Gradient: from-emerald-500 to-green-500
```

## Component States

### Button States
```
Default:    [  Export as PDF  ]  (Blue, shadow)
Hover:      [  Export as PDF  ]  (Darker blue, scale 1.05)
Active:     [  Export as PDF  ]  (Scale 0.95)
Disabled:   [  Export as PDF  ]  (Opacity 40%, no pointer)
Loading:    [  ⟳ Generating... ]  (Spinner animation)
```

### Input States
```
Default:    [    1.8    ]  (Gray border)
Focus:      [    1.8    ]  (Blue border, blue ring)
Filled:     [    1.8    ]  (Normal state)
Error:      [    1.8    ]  (Red border - if validation added)
```

### Slider States
```
Default:    ━━━━━━━━●━━━━━━━━━━  (Blue track, white thumb)
Hover:      ━━━━━━━━●━━━━━━━━━━  (Thumb scale 1.1)
Active:     ━━━━━━━━●━━━━━━━━━━  (Thumb scale 1.15)
Disabled:   ━━━━━━━━●━━━━━━━━━━  (Opacity 50%)
```

## Animation Examples

### Entrance Animations
```
Fade In + Slide Up:
  Initial:  opacity: 0, y: 20
  Animate:  opacity: 1, y: 0
  Duration: 300-400ms
  Easing:   easeInOut

Staggered Children:
  Delay:    index × 50ms
  Duration: 300ms
  Effect:   Sequential reveal
```

### Interaction Animations
```
Button Tap:
  Scale:    1.0 → 0.95 → 1.0
  Duration: 200ms
  Spring:   Stiffness 300

Card Hover:
  Scale:    1.0 → 1.02
  Duration: 200ms
  Easing:   easeOut

Progress Bar:
  Width:    0% → target%
  Duration: 800ms
  Delay:    500ms
  Easing:   easeInOut
```

## Responsive Breakpoints

### Mobile (< 768px)
```
- Single column layout
- Full-width cards
- Stacked input fields
- Larger touch targets (44px minimum)
- Simplified header
- Bottom-aligned export button
```

### Tablet (768px - 1024px)
```
- Two-column grid for inputs
- Two-column grid for results
- Side-by-side charts
- Visible currency label
```

### Desktop (> 1024px)
```
- Maximum width: 1280px (7xl)
- Two-column grid throughout
- Horizontal chart layout
- Full header with tagline
- Optimal spacing and padding
```

## Typography Scale

```
Hero Heading (h1):     40px / 48px  Bold
Section Heading (h2):  32px / 40px  Bold
Card Title (h3):       24px / 32px  Bold
Large Number:          32px / 40px  Bold
Body Text:             17px / 24px  Regular
Label:                 14px / 20px  Semibold
Caption:               12px / 16px  Medium
```

## Spacing System (8pt Grid)

```
4px   (0.5 units)  - Tight spacing
8px   (1 unit)     - Base unit
12px  (1.5 units)  - Card padding (small)
16px  (2 units)    - Standard margin/padding
24px  (3 units)    - Section spacing
32px  (4 units)    - Large spacing
48px  (6 units)    - Extra large spacing
```

## Icon Usage

### Lucide React Icons
```
Calculator:     Header logo
Scissors:       Fabric/cutting costs
Droplet:        Washing costs
Wind:           Press & packing
Package:        Accessories, batch
DollarSign:     Currency, costs
TrendingUp:     Profit, growth
Users:          Production volume
Target:         Selling price
Download:       Export PDF
Loader2:        Loading state
Check:          Select indicator
ChevronDown:    Dropdown indicator
```

## Shadow System

```
sm:   0 1px 2px rgba(0,0,0,0.05)
md:   0 4px 6px rgba(0,0,0,0.1)
lg:   0 10px 15px rgba(0,0,0,0.1)
xl:   0 20px 25px rgba(0,0,0,0.1)
2xl:  0 25px 50px rgba(0,0,0,0.25)

Colored shadows:
shadow-blue-500/30    - Blue glow
shadow-green-500/30   - Green glow
shadow-purple-500/30  - Purple glow
```

## Mobile Layout Example

```
┌─────────────────────┐
│  🧮 Calcoz  [INR ▼] │
└─────────────────────┘

┌─────────────────────┐
│  Smart Costing for  │
│  Clothing Mfg.      │
│                     │
│  [Export PDF 📥]   │
└─────────────────────┘

┌─────────────────────┐
│ ✂️ Direct Costs    │
│                     │
│ Fabric Consumption  │
│ [     1.8     ]     │
│                     │
│ Fabric Cost         │
│ [    150      ]     │
│                     │
│ Jobber/Tailoring    │
│ [     45      ]     │
│                     │
│ (All inputs stack)  │
└─────────────────────┘

┌─────────────────────┐
│ 📈 Overheads        │
│                     │
│ (Inputs stack)      │
│                     │
│ Batch Quantity: 500 │
│ ━━━━━━━━━━━━━━━━━  │
│                     │
│ Profit: 25%         │
│ ━━━━━━━━━━━━━━━━━  │
└─────────────────────┘

┌─────────────────────┐
│ 💰 Cost Per Piece  │
│     ₹425.00        │
└─────────────────────┘

┌─────────────────────┐
│ 🎯 Suggested Price │
│     ₹531.25        │
└─────────────────────┘

(All cards stack)
```

## Accessibility Features

```
✓ Semantic HTML structure
✓ ARIA labels on interactive elements
✓ Keyboard navigation support
✓ Focus indicators (2px blue ring)
✓ Color contrast ratios > 4.5:1
✓ Responsive text sizing
✓ Touch targets > 44px
✓ Screen reader friendly
```

## Performance Metrics

```
Target Metrics:
- First Contentful Paint:  < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive:      < 3.5s
- Cumulative Layout Shift:  < 0.1
- First Input Delay:        < 100ms
```

---

**Visual Design Principles:**
1. **Clarity** - Information is easy to scan and understand
2. **Consistency** - Patterns repeat throughout the app
3. **Feedback** - Every interaction provides visual response
4. **Hierarchy** - Important info stands out naturally
5. **Delight** - Smooth animations create joy

✅ **Premium Apple-grade design achieved!** 📱✨
