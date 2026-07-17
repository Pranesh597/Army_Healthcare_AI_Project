from pydantic import BaseModel


class PatientBase(BaseModel):
    patient_id: str
    name: str
    age: int
    gender: str
    blood_group: str
    disease: str
    doctor: str
    status: str
    admitted_date: str


class PatientCreate(PatientBase):
    pass


class PatientUpdate(PatientBase):
    pass


class PatientResponse(PatientBase):
    id: int

    class Config:
        from_attributes = True