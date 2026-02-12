from pydantic import BaseModel, Field
from datetime import datetime


class Skill(BaseModel):
    category: str  # "frontend" | "backend" | "tools"
    name: str
    level: int  # 0-100
    order: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "category": "frontend",
                "name": "React.js",
                "level": 80,
                "order": 1
            }
        }
