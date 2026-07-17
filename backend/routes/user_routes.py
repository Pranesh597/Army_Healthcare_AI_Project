from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db

from schemas.user_schema import (
    UserCreate,
    UserLogin,
    UserResponse,
)

from services.user_service import (
    register_user,
    login_user,
)

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.post(
    "/register",
    response_model=UserResponse,
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db),
):

    created = register_user(
        db,
        user,
    )

    if created is None:
        raise HTTPException(
            status_code=400,
            detail="Username already exists",
        )

    return created


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):

    token = login_user(
        db,
        user.username,
        user.password,
    )

    if token is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
        )

    return token