from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase
from typing import List, Optional
import os

from models.personal_info import PersonalInfo
from models.project import Project
from models.skill import Skill
from models.experience import Experience
from models.achievement import Achievement
from models.contact_submission import ContactSubmission, ContactSubmissionCreate


def create_portfolio_routes(db: AsyncIOMotorDatabase) -> APIRouter:
    router = APIRouter()

    # ==================== Personal Info ====================
    @router.get("/personal-info")
    async def get_personal_info():
        """Get personal information"""
        try:
            personal_info = await db.personal_info.find_one()
            if not personal_info:
                raise HTTPException(status_code=404, detail="Personal info not found")
            
            # Remove MongoDB _id field
            personal_info.pop('_id', None)
            return {"success": True, "data": personal_info}
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # ==================== Projects ====================
    @router.get("/projects")
    async def get_projects(featured: Optional[bool] = None):
        """Get all projects, optionally filter by featured status"""
        try:
            query = {}
            if featured is not None:
                query['featured'] = featured
            
            projects = await db.projects.find(query).sort('order', 1).to_list(100)
            
            # Remove MongoDB _id fields
            for project in projects:
                project['id'] = str(project.pop('_id'))
            
            return {"success": True, "data": projects}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # ==================== Skills ====================
    @router.get("/skills")
    async def get_skills():
        """Get all skills grouped by category"""
        try:
            skills = await db.skills.find().sort('order', 1).to_list(100)
            
            # Group by category
            grouped_skills = {
                'frontend': [],
                'backend': [],
                'tools': []
            }
            
            for skill in skills:
                skill.pop('_id', None)
                category = skill.pop('category')
                if category in grouped_skills:
                    grouped_skills[category].append(skill)
            
            return {"success": True, "data": grouped_skills}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # ==================== Experience ====================
    @router.get("/experience")
    async def get_experience():
        """Get all experience entries"""
        try:
            experience = await db.experience.find().sort('order', 1).to_list(100)
            
            # Remove MongoDB _id fields and add id
            for exp in experience:
                exp['id'] = str(exp.pop('_id'))
            
            return {"success": True, "data": experience}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # ==================== Achievements ====================
    @router.get("/achievements")
    async def get_achievements():
        """Get all achievements"""
        try:
            achievements = await db.achievements.find().sort('order', 1).to_list(100)
            
            # Remove MongoDB _id fields and add id
            for achievement in achievements:
                achievement['id'] = str(achievement.pop('_id'))
            
            return {"success": True, "data": achievements}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # ==================== Contact Submissions ====================
    @router.post("/contact")
    async def submit_contact(submission: ContactSubmissionCreate):
        """Submit a contact form"""
        try:
            contact_data = ContactSubmission(**submission.dict())
            result = await db.contact_submissions.insert_one(contact_data.dict())
            
            return {
                "success": True,
                "message": "Message received successfully. I'll get back to you soon!",
                "id": str(result.inserted_id)
            }
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    return router
