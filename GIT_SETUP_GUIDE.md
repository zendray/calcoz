# Git Setup Guide - Version Control for Calcoz

## ✅ Changes Reverted Successfully

**PDF Export:** Reverted to original single-page export system
**Pricing:** Kept the 2-plan pricing (₹200 Starter, ₹500 Pro)
**Input Text:** Kept the improved visibility (bold, dark text)

---

## 🔧 Setting Up Git for Version Control

### Step 1: Install Git

#### **Download Git:**
1. Go to: https://git-scm.com/download/win
2. Download the latest version for Windows
3. Run the installer
4. Use default settings (just keep clicking "Next")

#### **Verify Installation:**
Open PowerShell and run:
```powershell
git --version
```

You should see something like: `git version 2.43.0`

---

### Step 2: Configure Git

Run these commands in PowerShell (replace with your info):

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

### Step 3: Initialize Git Repository

Navigate to your project folder:

```powershell
cd c:\calcoz
git init
```

This creates a `.git` folder (hidden) that tracks all changes.

---

### Step 4: Create First Commit (Baseline)

```powershell
# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit - Calcoz app with 2-plan pricing"
```

---

### Step 5: Create GitHub Repository (Optional but Recommended)

#### **On GitHub.com:**
1. Go to https://github.com
2. Sign in (or create account)
3. Click "+" → "New repository"
4. Name: `calcoz`
5. Keep it Private
6. Don't initialize with README
7. Click "Create repository"

#### **Connect Local to GitHub:**
```powershell
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/calcoz.git

# Push your code
git push -u origin main
```

---

## 📝 Daily Workflow - Saving Your Work

### Every Time You Make Changes:

```powershell
# 1. Check what changed
git status

# 2. Add files you want to save
git add .

# 3. Commit with a message
git commit -m "Description of what you changed"

# 4. Push to GitHub (if using)
git push
```

---

## 🔄 Example Workflow

### Scenario: You add a new feature

```powershell
# Make your changes in VS Code...

# Check what changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Added currency selector feature"

# Push to GitHub
git push
```

---

## ⏮️ Going Back to Previous Versions

### View History:
```powershell
git log --oneline
```

Output example:
```
abc1234 Added currency selector feature
def5678 Fixed mobile keyboard issue
ghi9012 Initial commit - Calcoz app
```

### Go Back to a Previous Version:
```powershell
# Go back to a specific commit
git checkout abc1234

# To return to latest
git checkout main
```

### Create a Branch for Experiments:
```powershell
# Create and switch to new branch
git checkout -b experiment

# Make changes...

# If you like it, merge back:
git checkout main
git merge experiment

# If you don't like it, just delete:
git branch -d experiment
```

---

## 🎯 Recommended Commit Messages

**Good:**
- ✅ "Fixed PDF export button visibility"
- ✅ "Added 2-plan pricing (₹200, ₹500)"
- ✅ "Improved input text visibility in PDF"
- ✅ "Fixed mobile keyboard disappearing issue"

**Bad:**
- ❌ "Fixed stuff"
- ❌ "Updates"
- ❌ "asdf"

---

## 📦 What Gets Saved?

**Tracked (saved in Git):**
- All `.tsx`, `.ts`, `.css` files
- `package.json`
- Configuration files
- Documentation (`.md` files)

**Not Tracked (in `.gitignore`):**
- `node_modules/` (too large, can be reinstalled)
- `.next/` (build files)
- `.env.local` (secrets)
- `*.log` (temporary files)

---

## 🚨 Important Commands

### Undo Last Commit (but keep changes):
```powershell
git reset --soft HEAD~1
```

### Undo Changes to a File:
```powershell
git checkout -- filename.tsx
```

### See What Changed:
```powershell
git diff
```

### Create a Tag for Releases:
```powershell
git tag -a v1.0 -m "Version 1.0 - Initial release"
git push --tags
```

---

## 🎓 Quick Reference

| Command | What It Does |
|---------|-------------|
| `git status` | See what changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes |
| `git push` | Upload to GitHub |
| `git pull` | Download from GitHub |
| `git log` | View history |
| `git diff` | See changes |
| `git checkout -b name` | Create new branch |

---

## 📱 GitHub Desktop (Easier Alternative)

If command line is confusing, use GitHub Desktop:

1. Download: https://desktop.github.com/
2. Install and sign in
3. Add your `c:\calcoz` folder
4. Use the GUI to commit and push

**Much easier for beginners!**

---

## ✅ Your Current Status

**Files Changed:**
- ✅ `utils/export.ts` - Reverted to original PDF export
- ✅ `app/page.tsx` - Reverted structure, kept 2-plan pricing
- ✅ `components/InputSection.tsx` - Kept improved text visibility
- ✅ `.gitignore` - Already exists

**Next Steps:**
1. Install Git (or GitHub Desktop)
2. Run `git init` in `c:\calcoz`
3. Run `git add .`
4. Run `git commit -m "Baseline - Working version with 2-plan pricing"`
5. (Optional) Create GitHub repo and push

---

## 🎉 Benefits of Git

1. **Undo Mistakes:** Go back to any previous version
2. **Experiment Safely:** Try new features without breaking working code
3. **Backup:** Your code is safe on GitHub
4. **History:** See what changed and when
5. **Collaboration:** Easy to work with others

---

## 📞 Need Help?

**Git Documentation:** https://git-scm.com/doc
**GitHub Guides:** https://guides.github.com/
**Interactive Tutorial:** https://learngitbranching.js.org/

---

## 🚀 Quick Start (After Installing Git)

```powershell
# Navigate to project
cd c:\calcoz

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Calcoz with 2-plan pricing"

# Done! Your code is now version controlled
```

From now on, just:
```powershell
git add .
git commit -m "Your change description"
```

---

**Your code is now ready for version control! Install Git and run the Quick Start commands above.** 🎉
