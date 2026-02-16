# Sankalpa Sovan Samal - Portfolio Website

A modern, professional portfolio website built with React, FastAPI, and MongoDB. Features a dark theme with smooth animations, responsive design, and dynamic content management.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🌟 Features

- **Modern UI/UX**: Dark professional theme with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dynamic Content**: All content served from MongoDB database via REST API
- **Project Showcase**: Display projects with images, tech stacks, and GitHub links
- **Skills Visualization**: Animated progress bars showing proficiency levels
- **Contact Form**: Functional contact form that saves submissions to database
- **Backend API**: RESTful API built with FastAPI and MongoDB
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Axios** - API requests
- **React Router** - Navigation
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **MongoDB** - Database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js       # API service
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── models/
│   │   ├── personal_info.py
│   │   ├── project.py
│   │   ├── skill.py
│   │   ├── experience.py
│   │   ├── achievement.py
│   │   └── contact_submission.py
│   ├── routes/
│   │   └── portfolio.py
│   ├── server.py
│   ├── seed_data.py
│   ├── .env
│   └── requirements.txt
│
├── .gitignore
├── README.md
└── LOCAL_SETUP_GUIDE.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sankalpa-dot/portfolio-website.git
   cd portfolio-website
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env
   npm start
   ```

3. **Backend Setup:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   
   # Create .env file
   echo "MONGO_URL=mongodb://localhost:27017" > .env
   echo "DB_NAME=portfolio_db" >> .env
   echo "CORS_ORIGINS=*" >> .env
   
   # Seed database
   python seed_data.py
   
   # Start server
   uvicorn server:app --reload --port 8001
   ```

4. **Open in browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001/api
   - API Docs: http://localhost:8001/docs

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Health check |
| GET | `/api/personal-info` | Get personal information |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects?featured=true` | Get featured projects |
| GET | `/api/skills` | Get skills grouped by category |
| GET | `/api/experience` | Get experience timeline |
| GET | `/api/achievements` | Get achievements |
| POST | `/api/contact` | Submit contact form |

## 🎨 Customization

### Update Personal Information

Edit `backend/seed_data.py` with your details:

```python
personal_info = {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your tagline",
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    # ... more fields
}
```

Then re-seed the database:
```bash
cd backend
python seed_data.py
```

### Modify Theme Colors

Edit `frontend/tailwind.config.js` to change colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',  // Change to your brand color
      // ... more colors
    }
  }
}
```

## 🌐 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import repository on Vercel
3. Set environment variable: `REACT_APP_BACKEND_URL`
4. Deploy

### Backend (Railway/Render)
1. Push code to GitHub
2. Create new project on Railway/Render
3. Connect MongoDB database
4. Set environment variables
5. Deploy

See `LOCAL_SETUP_GUIDE.md` for detailed deployment instructions.

## 📸 Screenshots

### Home
![Home Section](https://via.placeholder.com/800x400?text=Home+Section)

### Projects
![Projects Section](https://via.placeholder.com/800x400?text=Projects+Section)

### Skills
![Skills Section](https://via.placeholder.com/800x400?text=Skills+Section)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sankalpa Sovan Samal**
- GitHub: [@sankalpa-dot](https://github.com/sankalpa-dot)
- LinkedIn: [Sankalpa Samal](https://linkedin.com/in/sankalpa-samal)
- Email: sankalpasovansamal@gmail.com

## 🙏 Acknowledgments

- shadcn/ui for beautiful UI components
- Unsplash for placeholder images
- Lucide for icons
- React, FastAPI, and MongoDB communities

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Email: sankalpasovansamal@gmail.com

---

⭐ **Star this repository if you find it helpful!**
