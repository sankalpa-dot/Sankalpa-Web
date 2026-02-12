from pydantic import BaseModel, EmailStr, Field
from datetime import datetime


class ContactSubmission(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = "new"  # "new" | "read" | "replied"
    submittedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "Hello, I would like to discuss a project",
                "status": "new"
            }
        }


class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
