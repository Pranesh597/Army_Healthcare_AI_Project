from sqlalchemy import Column, Integer, String

from database.database import Base


class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)

    patient_id = Column(String, unique=True, index=True)

    name = Column(String, nullable=False)

    age = Column(Integer)

    gender = Column(String)

    blood_group = Column(String)

    disease = Column(String)

    doctor = Column(String)

    status = Column(String)

    admitted_date = Column(String)