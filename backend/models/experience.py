from pydantic import BaseModel, Field
from datetime import datetime


class Experience(BaseModel):
    title: str
    organization: str
    period: str
    description: str
    type: str  # "project" | "academic" | "learning"
    order: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "title": "AI Project Development",
                "organization": "Personal Project",
                "period": "2024 - Present",
                "description": "Developing NeuroPlanix",
                "type": "project",
                "order": 1
            }
        }
