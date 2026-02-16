# GitHub Setup & Workflow Guide

## 📦 Step-by-Step: Push Your Portfolio to GitHub

### Option 1: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop:**
   - Visit: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Create Repository:**
   - Click "Create New Repository"
   - Name: `portfolio-website`
   - Local Path: Choose your project folder
   - Click "Create Repository"

3. **Commit Initial Code:**
   - You'll see all your files listed
   - Add commit message: "Initial commit: Portfolio website"
   - Click "Commit to main"

4. **Publish to GitHub:**
   - Click "Publish repository"
   - Choose Public or Private
   - Click "Publish repository"

Done! Your code is now on GitHub at: `https://github.com/YOUR_USERNAME/portfolio-website`

---

### Option 2: Using Command Line (VS Code Terminal)

1. **Open VS Code Terminal** (Ctrl + ` or View → Terminal)

2. **Navigate to your project:**
   ```bash
   cd /path/to/your/portfolio
   ```

3. **Initialize Git (if not already done):**
   ```bash
   git init
   ```

4. **Stage all files:**
   ```bash
   git add .
   ```

5. **Create initial commit:**
   ```bash
   git commit -m "Initial commit: Portfolio website with React, FastAPI, MongoDB"
   ```

6. **Create GitHub repository:**
   - Go to https://github.com/new
   - Repository name: `portfolio-website`
   - Description: "Personal portfolio website"
   - Choose Public or Private
   - **Do NOT** check "Initialize with README"
   - Click "Create repository"

7. **Link local repo to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   ```

8. **Push code to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

9. **Verify on GitHub:**
   - Go to: `https://github.com/YOUR_USERNAME/portfolio-website`
   - Your code should be visible!

---

## 🔄 Daily Development Workflow

### Making Changes and Pushing to GitHub

1. **Make changes in VS Code**

2. **Check what changed:**
   ```bash
   git status
   ```

3. **Stage changes:**
   ```bash
   # Stage all changes
   git add .
   
   # Or stage specific files
   git add frontend/src/components/Hero.jsx
   ```

4. **Commit changes:**
   ```bash
   git commit -m "Update hero section design"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

### Example Workflow:

```bash
# Check current status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Add new project to portfolio"

# Push to GitHub
git push

# View commit history
git log --oneline
```

---

## 🌿 Working with Branches (Recommended)

### Why Use Branches?
- Keep main branch stable
- Work on features independently
- Easy to review changes before merging

### Branch Workflow:

```bash
# Create and switch to new branch
git checkout -b feature/add-blog-section

# Make your changes...

# Stage and commit
git add .
git commit -m "Add blog section"

# Push branch to GitHub
git push origin feature/add-blog-section

# Go to GitHub and create Pull Request

# After PR is merged, switch back to main
git checkout main

# Pull latest changes
git pull origin main

# Delete local feature branch
git branch -d feature/add-blog-section
```

---

## 📥 Cloning Your Repository (On Another Computer)

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git

# Navigate to folder
cd portfolio-website

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Set up environment variables (see LOCAL_SETUP_GUIDE.md)
```

---

## 🔐 Managing Sensitive Information

### What NOT to commit to GitHub:
- ❌ `.env` files (already in .gitignore)
- ❌ API keys and secrets
- ❌ Database credentials
- ❌ `node_modules/` folder
- ❌ Virtual environment (`venv/`)

### How to Handle Environment Variables:

1. **Create `.env.example` files:**

**frontend/.env.example:**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**backend/.env.example:**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=*
```

2. **Commit `.env.example` to GitHub:**
```bash
git add frontend/.env.example backend/.env.example
git commit -m "Add environment variable examples"
git push
```

3. **Users copy and modify:**
```bash
# Copy example file
cp .env.example .env

# Edit with actual values
nano .env
```

---

## 🚀 GitHub Actions (Optional CI/CD)

### Auto-deploy on push to main:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📊 GitHub Repository Best Practices

### 1. Write Good Commit Messages:
```bash
# ✅ Good
git commit -m "Fix: Correct alignment issue in projects section"
git commit -m "Feature: Add dark mode toggle"
git commit -m "Update: Improve skill progress bar animation"

# ❌ Bad
git commit -m "fix"
git commit -m "update"
git commit -m "changes"
```

### 2. Use Semantic Commit Messages:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### 3. Create a Good README:
- ✅ Project description
- ✅ Features list
- ✅ Installation instructions
- ✅ Screenshots
- ✅ Technologies used
- ✅ License information

### 4. Add Useful Files:
- `README.md` - Project overview
- `LICENSE` - License information
- `CONTRIBUTING.md` - Contribution guidelines
- `.gitignore` - Files to ignore
- `CODE_OF_CONDUCT.md` - Code of conduct

---

## 🐛 Troubleshooting Common Issues

### Issue: "Permission denied (publickey)"
**Solution:**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
```

### Issue: "Failed to push some refs"
**Solution:**
```bash
# Pull latest changes first
git pull origin main --rebase

# Then push
git push origin main
```

### Issue: "Merge conflicts"
**Solution:**
```bash
# Open conflicted files in VS Code
# Choose which changes to keep
# Stage resolved files
git add .
git commit -m "Resolve merge conflicts"
git push
```

---

## 📚 Useful Git Commands

```bash
# View status
git status

# View commit history
git log
git log --oneline --graph

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD

# View differences
git diff

# Create branch
git branch feature-name

# Switch branch
git checkout feature-name

# Merge branch
git checkout main
git merge feature-name

# Delete branch
git branch -d feature-name

# View remotes
git remote -v

# Fetch changes without merging
git fetch origin

# Pull and merge
git pull origin main

# Push specific branch
git push origin branch-name

# View all branches
git branch -a

# Rename current branch
git branch -m new-name

# Stash changes temporarily
git stash
git stash pop

# View stashed changes
git stash list
```

---

## 🎯 Quick Reference

| Task | Command |
|------|---------|
| Initialize repo | `git init` |
| Stage all files | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push origin main` |
| Pull from GitHub | `git pull origin main` |
| Clone repository | `git clone <url>` |
| Create branch | `git checkout -b branch-name` |
| Switch branch | `git checkout branch-name` |
| Check status | `git status` |
| View history | `git log` |

---

## 🔗 Useful Resources

- **GitHub Docs:** https://docs.github.com/
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf
- **GitHub Desktop:** https://desktop.github.com/
- **VS Code Git Guide:** https://code.visualstudio.com/docs/sourcecontrol/overview
- **Interactive Git Tutorial:** https://learngitbranching.js.org/

---

**Happy coding! 🚀**
