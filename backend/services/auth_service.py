from auth.jwt_handler import create_access_token


class AuthService:

    @staticmethod
    def login(username: str, password: str, role: str):

        # Temporary users for development
        users = {
            "admin": {
                "password": "admin123",
                "role": "Army Admin"
            },
            "doctor": {
                "password": "doctor123",
                "role": "Military Doctor"
            },
            "analyst": {
                "password": "analyst123",
                "role": "Security Analyst"
            }
        }

        user = users.get(username)

        if not user:
            return None

        if user["password"] != password:
            return None

        if user["role"] != role:
            return None

        token = create_access_token(
            {
                "username": username,
                "role": role
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "username": username,
            "role": role
        }