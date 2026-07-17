from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from database.database import get_db

from schemas.profile_schema import (
    ProfileUpdate,
    PasswordChange,
)

from services.profile_service import (
    get_profile,
    update_profile,
    change_password,
)

router = APIRouter(
    prefix="/api/profile",
    tags=["Profile"],
)


@router.get("/{username}")
def read_profile(
    username: str,
    db: Session = Depends(get_db),
):

    profile = get_profile(
        db,
        username,
    )

    if profile is None:

        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return profile


@router.put("/{username}")
def edit_profile(
    username: str,
    profile: ProfileUpdate,
    db: Session = Depends(get_db),
):

    updated = update_profile(
        db,
        username,
        profile,
    )

    if updated is None:

        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return updated


@router.put("/change-password/{username}")
def update_password(
    username: str,
    password: PasswordChange,
    db: Session = Depends(get_db),
):

    result = change_password(
        db,
        username,
        password,
    )

    if not result["success"]:

        raise HTTPException(
            status_code=400,
            detail=result["message"],
        )

    return result