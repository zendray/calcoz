# Calcoz - Complete Installation Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Install Node.js (if not already installed)

**Download Node.js:**
- Visit: https://nodejs.org/
- Download the **LTS version** (recommended)
- Run the installer and follow the prompts
- Restart your terminal/command prompt after installation

**Verify Installation:**
```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: 9.x.x or higher
```

### Step 2: Install Dependencies

Open a terminal in the `calcoz` folder and run:

```bash
npm install
```

**What this does:**
- Downloads all required packages (~500MB)
- Takes 2-5 minutes depending on internet speed
- Creates a `node_modules` folder with all dependencies

**Expected Output:**
```
added 345 packages, and audited 346 packages in 2m
found 0 vulnerabilities
```

### Step 3: Start the App

```bash
npm run dev
```

**Expected Output:**
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 2.3s
```

**Open in Browser:**
Navigate to `http://localhost:3000` and you should see Calcoz running!

---

## 📦 What Gets Installed

### Core Dependencies
- **next** (^14.2.0) - React framework
- **react** (^18.3.0) - UI library
- **react-dom** (^18.3.0) - React DOM renderer
- **typescript** (^5.4.0) - Type safety

### UI & Styling
- **tailwindcss** (^3.4.0) - CSS framework
- **framer-motion** (^11.0.0) - Animation library
- **lucide-react** (^0.363.0) - Icon library
- **class-variance-authority** (^0.7.0) - Component variants
- **clsx** (^2.1.0) - Class name utility
- **tailwind-merge** (^2.2.0) - Tailwind class merger
- **tailwindcss-animate** (^1.0.7) - Animation utilities

### Radix UI Components
- **@radix-ui/react-label** (^2.0.2)
- **@radix-ui/react-slider** (^1.1.2)
- **@radix-ui/react-select** (^2.0.0)
- **@radix-ui/react-slot** (^1.0.2)

### Charts & Export
- **recharts** (^2.12.0) - Chart library
- **html2canvas** (^1.4.1) - HTML to canvas
- **jspdf** (^2.5.1) - PDF generation

### Development Tools
- **eslint** (^8.57.0) - Code linting
- **eslint-config-next** (^14.2.0) - Next.js ESLint config
- **postcss** (^8.4.0) - CSS processing
- **autoprefixer** (^10.4.0) - CSS vendor prefixes

**Total Size:** ~500MB (node_modules)

---

## 🖥️ Available Commands

### Development
```bash
npm run dev
# Starts development server on http://localhost:3000
# Hot reload enabled - changes reflect immediately
```

### Production Build
```bash
npm run build
# Creates optimized production build in .next folder
# Minifies code, optimizes images, generates static pages
```

### Production Server
```bash
npm start
# Runs production server (must run build first)
# Optimized for performance
```

### Linting
```bash
npm run lint
# Checks code for errors and style issues
```

---

## 🔧 Troubleshooting

### Problem: "npx/npm not recognized"

**Solution:** Node.js is not installed or not in PATH
1. Install Node.js from https://nodejs.org/
2. Restart terminal/command prompt
3. Verify with `node --version`

### Problem: "Port 3000 already in use"

**Solution:** Another app is using port 3000
```bash
# Use a different port
npm run dev -- -p 3001

# Or find and kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Problem: "Module not found" errors

**Solution:** Dependencies not installed correctly
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm cache clean
npm cache clean --force
npm install
```

### Problem: TypeScript errors

**Solution:** Type checking issues
```bash
# Check for type errors
npx tsc --noEmit

# Most errors are informational and won't prevent running
```

### Problem: Slow installation

**Solution:** Network or npm registry issues
```bash
# Try using a faster registry
npm install --registry=https://registry.npmjs.org/

# Or use yarn instead
npm install -g yarn
yarn install
```

### Problem: Permission errors (Mac/Linux)

**Solution:** Need elevated permissions
```bash
# Don't use sudo with npm install
# Instead, fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

---

## 🌐 Browser Compatibility

### Supported Browsers
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Opera 76+

### Mobile Browsers
✅ iOS Safari 14+
✅ Chrome Android 90+
✅ Samsung Internet 14+

### Not Supported
❌ Internet Explorer (all versions)
❌ Opera Mini
❌ UC Browser (older versions)

---

## 📱 Testing on Mobile

### Option 1: Local Network Access
```bash
# Start dev server
npm run dev

# Find your local IP
# Windows:
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.100)

# Mac/Linux:
ifconfig
# Look for inet address

# Access from mobile:
# http://192.168.1.100:3000
```

### Option 2: ngrok (Public URL)
```bash
# Install ngrok
npm install -g ngrok

# Start dev server
npm run dev

# In another terminal, create tunnel
ngrok http 3000

# Use the provided URL on any device
```

---

## 🚢 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
# Your app will be live at: https://calcoz-xxx.vercel.app
```

**Pros:**
- Free tier available
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git
- Zero configuration

### Option 2: Netlify
```bash
# Build the app
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Follow prompts
```

**Pros:**
- Free tier available
- Form handling
- Serverless functions
- Split testing

### Option 3: Self-Hosted (VPS/Server)
```bash
# On your server:
# 1. Install Node.js
# 2. Clone/upload your project
# 3. Install dependencies
npm install

# 4. Build
npm run build

# 5. Start with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "calcoz" -- start

# 6. Configure nginx reverse proxy (optional)
```

**Pros:**
- Full control
- Custom domain
- No vendor lock-in

### Option 4: Docker
```dockerfile
# Create Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build image
docker build -t calcoz .

# Run container
docker run -p 3000:3000 calcoz
```

---

## 📊 Performance Tips

### Development
- Use `npm run dev` for hot reload
- Keep dev tools open for debugging
- Use React DevTools extension

### Production
- Always run `npm run build` before deploying
- Enable gzip compression on server
- Use CDN for static assets
- Enable caching headers

### Optimization
- Images are auto-optimized by Next.js
- Code splitting is automatic
- Tree shaking removes unused code
- CSS is purged in production

---

## 🔐 Security Considerations

### Environment Variables
```bash
# Create .env.local for sensitive data
# This file is gitignored by default

# Example:
NEXT_PUBLIC_API_KEY=your_key_here
```

### API Keys
- Never commit API keys to Git
- Use environment variables
- Prefix with `NEXT_PUBLIC_` for client-side access

### HTTPS
- Always use HTTPS in production
- Vercel/Netlify provide automatic HTTPS
- For self-hosted, use Let's Encrypt

---

## 📚 Learning Resources

### Next.js
- Official Docs: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn

### React
- Official Docs: https://react.dev/
- React Tutorial: https://react.dev/learn

### TypeScript
- Official Docs: https://www.typescriptlang.org/docs/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/

### Tailwind CSS
- Official Docs: https://tailwindcss.com/docs
- Tailwind UI: https://tailwindui.com/

### Framer Motion
- Official Docs: https://www.framer.com/motion/
- Examples: https://www.framer.com/motion/examples/

---

## 🎯 Next Steps

After installation:

1. **Explore the App**
   - Try changing input values
   - Adjust sliders
   - Switch currencies
   - Export a PDF

2. **Customize**
   - Modify colors in `tailwind.config.ts`
   - Change demo values in `app/page.tsx`
   - Add your logo in `components/Header.tsx`

3. **Extend**
   - Add more cost categories
   - Implement data persistence
   - Add user authentication
   - Create multiple product templates

4. **Deploy**
   - Choose a deployment platform
   - Set up custom domain
   - Configure analytics
   - Monitor performance

---

## 💬 Support

### Documentation
- **README.md** - Project overview
- **SETUP.md** - Quick setup guide
- **PROJECT_SUMMARY.md** - Technical details
- **VISUAL_GUIDE.md** - Design specifications

### Community
- GitHub Issues - Report bugs
- GitHub Discussions - Ask questions
- Stack Overflow - Technical help

### Commercial Support
For custom development or support, contact the maintainers.

---

## ✅ Installation Checklist

- [ ] Node.js 18+ installed
- [ ] npm/yarn available
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] App accessible at http://localhost:3000
- [ ] All features working (inputs, calculations, charts, export)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] PDF export working

---

**🎉 Congratulations!**

You've successfully installed Calcoz - the premium clothing costing calculator!

✅ **Calcoz built — PREMIUM APPLE-DESIGNED CLOTHING CALCULATOR ACHIEVED 📱✨**

Happy costing! 🚀
