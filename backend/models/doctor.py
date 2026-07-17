from sqlalchemy import Column, Integer, String
from database.database import Base


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True, index=True)

    doctor_id = Column(String, unique=True, index=True, nullable=False)

    name = Column(String, nullable=False)

    specialization = Column(String, nullable=False)

    department = Column(String, nullable=False)

    phone = Column(String, nullable=False)

    email = Column(String, nullable=False)

    experience = Column(Integer, nullable=False)

    status = Column(String, default="Available")