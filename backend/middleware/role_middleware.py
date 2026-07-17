from fastapi import HTTPException

from utils.permissions import PERMISSIONS


def check_permission(

    role: str,

    permission: str,

):

    permissions = PERMISSIONS.get(

        role,

        [],

    )

    if permission not in permissions:

        raise HTTPException(

            status_code=403,

            detail="Permission Denied",

        )

    return True