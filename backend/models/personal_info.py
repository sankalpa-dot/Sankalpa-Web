from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class PersonalInfo(BaseModel):
    name: str
    title: str
    tagline: str
    email: str
    github: str
    linkedin: str
    resumeUrl: str = "/resume.pdf"
    about: str
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Sankalpa Sovan Samal",
                "title": "M.Sc. Computer Science Student | Web Developer",
                "tagline": "Passionate about building intelligent web applications",
                "email": "sankalpasovansamal@gmail.com",
                "github": "https://github.com/sankalpa-dot",
                "linkedin": "https://linkedin.com/in/sankalpa-samal",
                "resumeUrl": "/resume.pdf",
                "about": "I'm a Computer Science graduate student..."
            }
        }
