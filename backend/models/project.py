from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class Project(BaseModel):
    title: str
    subtitle: str
    description: str
    techStack: List[str]
    github: Optional[str] = ""
    liveDemo: Optional[str] = ""
    image: str
    status: str = "Completed"  # "Ongoing" | "Completed"
    featured: bool = False
    order: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "title": "NeuroPlanix",
                "subtitle": "AI-Based Study Planner",
                "description": "An intelligent study planning platform",
                "techStack": ["React", "Node.js", "Firebase"],
                "github": "https://github.com/sankalpa-dot/NeuroPlanix",
                "liveDemo": "",
                "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
                "status": "Ongoing",
                "featured": True,
                "order": 1
            }
        }
