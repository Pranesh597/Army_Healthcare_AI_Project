from pydantic import BaseModel


class MedicalRecordBase(BaseModel):
    patient_id: str
    patient_name: str
    doctor_name: str
    diagnosis: str
    prescription: str
    blood_pressure: str
    heart_rate: str
    temperature: str
    report_file: str
    xray_file: str
    mri_file: str
    created_date: str


class MedicalRecordCreate(MedicalRecordBase):
    pass


class MedicalRecordUpdate(MedicalRecordBase):
    pass


class MedicalRecordResponse(MedicalRecordBase):
    id: int

    class Config:
        from_attributes = True