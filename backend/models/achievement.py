from pydantic import BaseModel, Field
from datetime import datetime


class Achievement(BaseModel):
    title: str
    description: str
    year: str
    order: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "title": "NeuroPlanix AI Study Planner",
                "description": "Developed an intelligent study planning system",
                "year": "2024",
                "order": 1
            }
        }
