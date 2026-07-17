from pydantic import BaseModel

from datetime import datetime


class ProfileResponse(BaseModel):

    id: int

    username: str

    email: str

    role: str

    created_at: datetime

    updated_at: datetime

    class Config:

        from_attributes = True


class ProfileUpdate(BaseModel):

    username: str

    email: str


class PasswordChange(BaseModel):

    current_password: str

    new_password: str