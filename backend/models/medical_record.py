from sqlalchemy import Column, Integer, String

from database.database import Base


class MedicalRecord(Base):
    __tablename__ = "medical_records"

    id = Column(Integer, primary_key=True, index=True)

    patient_id = Column(String, index=True)
    patient_name = Column(String)
    doctor_name = Column(String)

    diagnosis = Column(String)
    prescription = Column(String)

    blood_pressure = Column(String)
    heart_rate = Column(String)
    temperature = Column(String)

    report_file = Column(String)
    xray_file = Column(String)
    mri_file = Column(String)

    created_date = Column(String)