"""
Seed script to populate the database with initial portfolio data
Run this once to set up the database with mock data
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']


async def seed_database():
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print("🌱 Starting database seeding...")
    
    # Clear existing data (optional - comment out if you want to keep existing data)
    print("🗑️  Clearing existing collections...")
    await db.personal_info.delete_many({})
    await db.projects.delete_many({})
    await db.skills.delete_many({})
    await db.experience.delete_many({})
    await db.achievements.delete_many({})
    
    # ==================== Personal Info ====================
    print("👤 Seeding personal info...")
    personal_info = {
        "name": "Sankalpa Sovan Samal",
        "title": "M.Sc. Computer Science Student | Web Developer | AI Project Enthusiast",
        "tagline": "Passionate about building intelligent web applications and modern user experiences. I enjoy turning ideas into scalable, real-world digital solutions.",
        "email": "sankalpasovansamal@gmail.com",
        "github": "https://github.com/sankalpa-dot",
        "linkedin": "https://linkedin.com/in/sankalpa-samal",
        "resumeUrl": "/resume.pdf",
        "about": "I'm a Computer Science graduate student with a passion for creating intelligent web applications that solve real-world problems. My journey in tech has been driven by curiosity and a desire to build products that make a difference. I specialize in full-stack development with a keen interest in AI integration, always staying updated with the latest technologies and best practices."
    }
    await db.personal_info.insert_one(personal_info)
    
    # ==================== Projects ====================
    print("📁 Seeding projects...")
    projects = [
        {
            "title": "NeuroPlanix",
            "subtitle": "AI-Based Study Planner",
            "description": "An intelligent study planning platform that generates personalized daily/weekly schedules, tracks progress, maintains study streaks, and provides AI-based guidance for students.",
            "techStack": ["React", "Tailwind CSS", "Node.js", "Firebase", "Gemini API", "JavaScript"],
            "github": "https://github.com/sankalpa-dot/NeuroPlanix.git",
            "liveDemo": "",
            "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
            "status": "Ongoing",
            "featured": True,
            "order": 1
        },
        {
            "title": "HungR",
            "subtitle": "Online Catering System",
            "description": "A responsive web application for providing monthly meal plans and catering services, especially targeting accessibility in remote areas.",
            "techStack": ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            "github": "https://github.com/sannskaarr/HungR.git",
            "liveDemo": "",
            "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
            "status": "Completed",
            "featured": True,
            "order": 2
        },
        {
            "title": "Bakers Kitchen",
            "subtitle": "Online Bakery Website",
            "description": "A web platform for showcasing bakery products with user-friendly UI and responsive design.",
            "techStack": ["HTML", "CSS", "JavaScript"],
            "github": "https://github.com/bipasa2003/bakers-kitchen.git",
            "liveDemo": "",
            "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
            "status": "Completed",
            "featured": False,
            "order": 3
        },
        {
            "title": "Obys",
            "subtitle": "Design Agency Website Clone",
            "description": "A pixel-perfect frontend clone of a professional design agency website to demonstrate modern UI, animations, and responsive layout skills.",
            "techStack": ["HTML", "CSS", "JavaScript"],
            "github": "",
            "liveDemo": "",
            "image": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
            "status": "Completed",
            "featured": False,
            "order": 4
        }
    ]
    await db.projects.insert_many(projects)
    
    # ==================== Skills ====================
    print("💪 Seeding skills...")
    skills = [
        # Frontend
        {"category": "frontend", "name": "HTML5", "level": 90, "order": 1},
        {"category": "frontend", "name": "CSS3", "level": 85, "order": 2},
        {"category": "frontend", "name": "JavaScript", "level": 85, "order": 3},
        {"category": "frontend", "name": "React.js", "level": 80, "order": 4},
        {"category": "frontend", "name": "Tailwind CSS", "level": 85, "order": 5},
        {"category": "frontend", "name": "Responsive Design", "level": 90, "order": 6},
        
        # Backend
        {"category": "backend", "name": "PHP", "level": 75, "order": 1},
        {"category": "backend", "name": "MySQL", "level": 75, "order": 2},
        {"category": "backend", "name": "Firebase", "level": 70, "order": 3},
        {"category": "backend", "name": "Node.js", "level": 65, "order": 4},
        
        # Tools
        {"category": "tools", "name": "Git & GitHub", "level": 85, "order": 1},
        {"category": "tools", "name": "VS Code", "level": 90, "order": 2},
        {"category": "tools", "name": "Figma", "level": 70, "order": 3},
        {"category": "tools", "name": "API Integration", "level": 75, "order": 4}
    ]
    await db.skills.insert_many(skills)
    
    # ==================== Experience ====================
    print("💼 Seeding experience...")
    experience = [
        {
            "title": "AI Project Development",
            "organization": "Personal Project",
            "period": "2024 - Present",
            "description": "Developing NeuroPlanix, an AI-powered study planner using Gemini API for intelligent schedule generation and personalized learning recommendations.",
            "type": "project",
            "order": 1
        },
        {
            "title": "Full-Stack Development",
            "organization": "Academic Projects",
            "period": "2023 - 2024",
            "description": "Built multiple full-stack web applications including catering systems and e-commerce platforms using PHP, MySQL, and modern JavaScript frameworks.",
            "type": "academic",
            "order": 2
        },
        {
            "title": "Frontend Development",
            "organization": "Self-Learning & Practice",
            "period": "2022 - Present",
            "description": "Created responsive, pixel-perfect web interfaces with modern UI/UX practices, animations, and performance optimization.",
            "type": "learning",
            "order": 3
        }
    ]
    await db.experience.insert_many(experience)
    
    # ==================== Achievements ====================
    print("🏆 Seeding achievements...")
    achievements = [
        {
            "title": "NeuroPlanix AI Study Planner",
            "description": "Developed an intelligent study planning system with AI integration",
            "year": "2024",
            "order": 1
        },
        {
            "title": "Multiple Full-Stack Projects",
            "description": "Successfully completed 4+ production-ready web applications",
            "year": "2023-2024",
            "order": 2
        },
        {
            "title": "AI & API Integration",
            "description": "Integrated Gemini API for intelligent features in web applications",
            "year": "2024",
            "order": 3
        }
    ]
    await db.achievements.insert_many(achievements)
    
    print("✅ Database seeding completed successfully!")
    print("\n📊 Summary:")
    print(f"   - Personal Info: 1 document")
    print(f"   - Projects: {len(projects)} documents")
    print(f"   - Skills: {len(skills)} documents")
    print(f"   - Experience: {len(experience)} documents")
    print(f"   - Achievements: {len(achievements)} documents")
    
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_database())
