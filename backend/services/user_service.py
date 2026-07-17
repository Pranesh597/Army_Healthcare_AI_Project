from sqlalchemy.orm import Session

from models.user import User
from schemas.user_schema import UserCreate
from auth.password_handler import (
    hash_password,
    verify_password,
)
from auth.jwt_handler import create_access_token


def register_user(db: Session, user: UserCreate):

    existing_user = db.query(User).filter(
        User.username == user.username
    ).first()

    if existing_user:
        return None

    new_user = User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password),
        role=user.role,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def login_user(
    db: Session,
    username: str,
    password: str,
):

    user = db.query(User).filter(
        User.username == username
    ).first()

    if not user:
        return None

    if not verify_password(
        password,
        user.password,
    ):
        return None

    token = create_access_token(
        {
            "sub": user.username,
            "role": user.role,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "role": user.role,
    }