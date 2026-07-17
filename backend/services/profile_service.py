from sqlalchemy.orm import Session

from models.user import User

from schemas.profile_schema import (
    ProfileUpdate,
    PasswordChange,
)

from auth.password_handler import (
    hash_password,
    verify_password,
)


def get_profile(
    db: Session,
    username: str,
):

    return db.query(User).filter(
        User.username == username
    ).first()


def update_profile(
    db: Session,
    username: str,
    profile: ProfileUpdate,
):

    user = db.query(User).filter(
        User.username == username
    ).first()

    if not user:

        return None

    user.username = profile.username
    user.email = profile.email

    db.commit()
    db.refresh(user)

    return user


def change_password(
    db: Session,
    username: str,
    password: PasswordChange,
):

    user = db.query(User).filter(
        User.username == username
    ).first()

    if not user:

        return {
            "success": False,
            "message": "User not found"
        }

    if not verify_password(
        password.current_password,
        user.password,
    ):

        return {
            "success": False,
            "message": "Current password is incorrect"
        }

    user.password = hash_password(
        password.new_password
    )

    db.commit()

    return {
        "success": True,
        "message": "Password updated successfully"
    }