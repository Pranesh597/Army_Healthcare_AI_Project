from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.auth_service import AuthService

router = APIRouter()


class LoginRequest(BaseModel):
    username: str
    password: str
    role: str


@router.post("/login")
def login(request: LoginRequest):

    result = AuthService.login(
        request.username,
        request.password,
        request.role
    )

    if result is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid username, password, or role"
        )

    return result