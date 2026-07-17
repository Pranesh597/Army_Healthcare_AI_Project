from pydantic import BaseModel


class DoctorCreate(BaseModel):
    doctor_id: str
    name: str
    specialization: str
    department: str
    phone: str
    email: str
    experience: int
    status: str


class DoctorResponse(DoctorCreate):
    id: int

    class Config:
        from_attributes = True