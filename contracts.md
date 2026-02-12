# API Contracts & Backend Integration Plan

## Overview
This document outlines the API contracts, MongoDB schemas, and integration strategy for converting the portfolio from mock data to a fully dynamic backend-driven application.

---

## Current Mock Data Structure (from mock.js)

### 1. Personal Info
- name, title, tagline, email, github, linkedin, resumeUrl, about

### 2. Projects (Array of 4 projects)
- id, title, subtitle, description, techStack[], github, liveDemo, image, status, featured

### 3. Skills (Categorized)
- frontend: [{ name, level }]
- backend: [{ name, level }]
- tools: [{ name, level }]

### 4. Experience (Array of 3 entries)
- id, title, organization, period, description, type

### 5. Achievements (Array of 3 items)
- id, title, description, year

---

## MongoDB Schemas

### PersonalInfo Collection
```javascript
{
  _id: ObjectId,
  name: String,
  title: String,
  tagline: String,
  email: String,
  github: String,
  linkedin: String,
  resumeUrl: String,
  about: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Projects Collection
```javascript
{
  _id: ObjectId,
  title: String,
  subtitle: String,
  description: String,
  techStack: [String],
  github: String,
  liveDemo: String,
  image: String,
  status: String, // "Ongoing" | "Completed"
  featured: Boolean,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Skills Collection
```javascript
{
  _id: ObjectId,
  category: String, // "frontend" | "backend" | "tools"
  name: String,
  level: Number, // 0-100
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Experience Collection
```javascript
{
  _id: ObjectId,
  title: String,
  organization: String,
  period: String,
  description: String,
  type: String, // "project" | "academic" | "learning"
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Achievements Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  year: String,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### ContactSubmissions Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // "new" | "read" | "replied"
  submittedAt: Date
}
```

---

## API Endpoints

### GET /api/personal-info
**Description:** Fetch personal information  
**Response:**
```json
{
  "success": true,
  "data": {
    "name": "Sankalpa Sovan Samal",
    "title": "...",
    ...
  }
}
```

### GET /api/projects
**Description:** Fetch all projects  
**Query Params:** ?featured=true (optional)  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "title": "NeuroPlanix",
      ...
    }
  ]
}
```

### GET /api/skills
**Description:** Fetch all skills grouped by category  
**Response:**
```json
{
  "success": true,
  "data": {
    "frontend": [...],
    "backend": [...],
    "tools": [...]
  }
}
```

### GET /api/experience
**Description:** Fetch experience timeline  
**Response:**
```json
{
  "success": true,
  "data": [...]
}
```

### GET /api/achievements
**Description:** Fetch achievements  
**Response:**
```json
{
  "success": true,
  "data": [...]
}
```

### POST /api/contact
**Description:** Submit contact form  
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello..."
}
```
**Response:**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

---

## Frontend Integration Strategy

### Files to Modify:
1. **src/pages/Home.jsx** - Add data fetching logic
2. **src/components/Hero.jsx** - Use API data instead of mock
3. **src/components/About.jsx** - Use API data
4. **src/components/Skills.jsx** - Use API data
5. **src/components/Projects.jsx** - Use API data
6. **src/components/Experience.jsx** - Use API data
7. **src/components/Contact.jsx** - POST to backend API
8. **src/components/Footer.jsx** - Use API data

### Implementation Approach:
1. Create a `src/services/api.js` file for centralized API calls
2. Add loading states using React state
3. Add error handling with user-friendly messages
4. Keep mock.js as fallback during development
5. Use useEffect hooks to fetch data on component mount

### API Service Structure:
```javascript
// src/services/api.js
import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const fetchPersonalInfo = async () => {
  const response = await axios.get(`${API_BASE_URL}/personal-info`);
  return response.data;
};

// ... other API functions
```

---

## Database Seeding

After creating models and endpoints, seed the database with initial data from mock.js:
- Create a seed script or use POST requests
- Insert personalInfo (single document)
- Insert projects (4 documents)
- Insert skills (15+ documents)
- Insert experience (3 documents)
- Insert achievements (3 documents)

---

## Testing Checklist

### Backend Testing:
- [ ] All GET endpoints return correct data
- [ ] POST /api/contact saves to database
- [ ] CORS is properly configured
- [ ] Error handling works correctly
- [ ] MongoDB connections are stable

### Frontend Integration Testing:
- [ ] All sections load data from backend
- [ ] Loading states display correctly
- [ ] Error states handled gracefully
- [ ] Contact form submits successfully
- [ ] No console errors
- [ ] Performance is acceptable

### End-to-End Testing:
- [ ] Full page load works
- [ ] Navigation smooth scrolling works
- [ ] Contact form submission works
- [ ] All links (GitHub, LinkedIn, etc.) work
- [ ] Responsive design intact
- [ ] No regressions from mock data version

---

## Notes
- Keep the frontend stateless - all data from backend
- Add basic validation on backend for contact form
- Consider adding email notifications for contact submissions (future enhancement)
- Admin panel for content management (future enhancement)
