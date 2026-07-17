from fastapi import APIRouter
from sqlalchemy.orm import Session

from database.database import SessionLocal

from models.patient import Patient
from models.doctor import Doctor
from models.medical_record import MedicalRecord
from models.appointment import Appointment

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Analytics"]
)


@router.get("/analytics")
def get_analytics():

    db: Session = SessionLocal()

    try:

        total_patients = db.query(Patient).count()

        total_doctors = db.query(Doctor).count()

        total_records = db.query(MedicalRecord).count()

        total_appointments = db.query(Appointment).count()

        return {

            "patients": total_patients,

            "doctors": total_doctors,

            "medical_records": total_records,

            "appointments": total_appointments,

            "predictions": 0,

            "recent_patients": [],

            "recent_appointments": [],

            "disease_stats": [],

            "appointment_stats": []

        }

    finally:

        db.close()