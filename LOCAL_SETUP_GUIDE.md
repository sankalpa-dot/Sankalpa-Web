# Portfolio Setup Guide - Local Development & GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)
- **VS Code** - [Download](https://code.visualstudio.com/)

---

## 🚀 Part 1: Local Setup (VS Code)

### Step 1: Download Your Code

You can download your code from the current environment using one of these methods:

#### Method A: Create a ZIP file
```bash
# Run this command in your terminal to create a downloadable ZIP
cd /app
tar -czf portfolio-code.tar.gz frontend backend contracts.md test_result.md
```

#### Method B: Use Git (if you have access)
```bash
# Clone or download the repository
git clone <your-repo-url>
cd <your-project-folder>
```

### Step 2: Project Structure

Your project should have this structure:
```
portfolio/
├── frontend/          # React frontend
├── backend/           # FastAPI backend
├── .gitignore
└── README.md
```

---

## ⚙️ Part 2: Environment Setup

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create `.env` file in `frontend/` directory:**
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

4. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```
   
   Frontend will run on: **http://localhost:3000**

---

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # Mac/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env` file in `backend/` directory:**
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=portfolio_db
   CORS_ORIGINS=*
   ```

5. **Start MongoDB:**
   ```bash
   # Windows (if installed as service)
   net start MongoDB

   # Mac
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

6. **Seed the database (first time only):**
   ```bash
   python seed_data.py
   ```

7. **Start the backend server:**
   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```
   
   Backend will run on: **http://localhost:8001**

---

## 🧪 Testing Locally

1. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001/api/
   - API Docs: http://localhost:8001/docs

2. **Test API endpoints:**
   ```bash
   # Test backend is running
   curl http://localhost:8001/api/

   # Test personal info
   curl http://localhost:8001/api/personal-info

   # Test projects
   curl http://localhost:8001/api/projects
   ```

---

## 📦 Part 3: GitHub Setup

### Step 1: Initialize Git Repository

```bash
# Navigate to your project root
cd /path/to/your/portfolio

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website with React, FastAPI, and MongoDB"
```

### Step 2: Create `.gitignore` File

Create a `.gitignore` file in your project root:

```gitignore
# Frontend
frontend/node_modules/
frontend/build/
frontend/.env
frontend/.env.local
frontend/yarn-error.log
frontend/npm-debug.log*

# Backend
backend/venv/
backend/__pycache__/
backend/*.pyc
backend/.env
backend/.pytest_cache/

# IDEs
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Database
*.db
*.sqlite
```

### Step 3: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New Repository"**
3. **Fill in details:**
   - Repository name: `portfolio-website`
   - Description: "Personal portfolio website built with React, FastAPI, and MongoDB"
   - Choose Public or Private
   - **Do NOT** initialize with README, .gitignore, or license (you already have these)
4. **Click "Create repository"**

### Step 4: Push to GitHub

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

---

## 📝 Part 4: Update Personal Information

To customize the portfolio with your own data:

1. **Update the seed data:**
   Edit `backend/seed_data.py` with your information:
   - Personal info (name, email, social links)
   - Projects
   - Skills
   - Experience
   - Achievements

2. **Re-seed the database:**
   ```bash
   cd backend
   python seed_data.py
   ```

---

## 🔄 Part 5: Development Workflow

### Daily Development

1. **Start services:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   uvicorn server:app --reload --host 0.0.0.0 --port 8001

   # Terminal 2 - Frontend
   cd frontend
   npm start

   # Terminal 3 - MongoDB (if not running as service)
   mongod
   ```

2. **Make changes in VS Code**

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

### Recommended VS Code Extensions

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Python** - Python support
- **GitLens** - Git integration
- **Thunder Client** - API testing (alternative to Postman)
- **MongoDB for VS Code** - MongoDB management

---

## 🌐 Part 6: Deployment Options

### Option A: Vercel (Frontend) + Railway (Backend)

**Frontend (Vercel):**
1. Connect GitHub repo to Vercel
2. Set environment variable: `REACT_APP_BACKEND_URL=<your-backend-url>`
3. Deploy

**Backend (Railway):**
1. Connect GitHub repo to Railway
2. Add MongoDB service
3. Set environment variables
4. Deploy

### Option B: Heroku (Full Stack)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-portfolio-name

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set MONGO_URL=<provided-by-heroku>

# Deploy
git push heroku main
```

### Option C: DigitalOcean / AWS / Azure

Follow platform-specific guides for deploying:
- React app (static hosting or Node server)
- FastAPI backend (Python app)
- MongoDB database (managed service)

---

## 🛠️ Troubleshooting

### Frontend not loading?
- Check if backend is running on port 8001
- Verify `REACT_APP_BACKEND_URL` in `.env`
- Clear browser cache
- Check console for errors (F12)

### Backend not connecting to MongoDB?
- Ensure MongoDB is running: `mongod --version`
- Check `MONGO_URL` in backend `.env`
- Verify MongoDB connection: `mongo` (in terminal)

### Port already in use?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 📚 Additional Resources

- **React Documentation:** https://react.dev/
- **FastAPI Documentation:** https://fastapi.tiangolo.com/
- **MongoDB Documentation:** https://docs.mongodb.com/
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 🤝 Contributing

If you want to add features or fix bugs:

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make changes and commit: `git commit -m "Add new feature"`
3. Push to GitHub: `git push origin feature/your-feature-name`
4. Create a Pull Request on GitHub

---

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review error logs in VS Code terminal
3. Search for similar issues on Stack Overflow
4. Check GitHub Issues for known problems

---

**Good luck with your portfolio! 🚀**
