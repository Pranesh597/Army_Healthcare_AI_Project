from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Army Healthcare AI"

    SECRET_KEY: str = "armyhealthcareai@2026"

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = ".env"


settings = Settings()