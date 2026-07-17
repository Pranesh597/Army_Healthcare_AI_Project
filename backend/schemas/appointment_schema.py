from pydantic import BaseModel


class AppointmentCreate(BaseModel):
    appointment_id: str
    patient_id: str
    doctor_id: str
    appointment_date: str
    appointment_time: str
    appointment_type: str
    status: str
    notes: str


class AppointmentResponse(AppointmentCreate):
    id: int

    class Config:
        from_attributes = True