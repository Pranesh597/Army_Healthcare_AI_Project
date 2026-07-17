from sqlalchemy import Column, Integer, String

from database.database import Base


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)

    appointment_id = Column(String, unique=True, index=True, nullable=False)

    patient_id = Column(String, nullable=False)

    doctor_id = Column(String, nullable=False)

    appointment_date = Column(String, nullable=False)

    appointment_time = Column(String, nullable=False)

    appointment_type = Column(String, nullable=False)

    status = Column(String, default="Scheduled")

    notes = Column(String, nullable=True)