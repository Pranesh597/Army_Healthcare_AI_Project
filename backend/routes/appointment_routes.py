from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db

from schemas.appointment_schema import (
    AppointmentCreate,
    AppointmentResponse,
)

from services.appointment_service import (
    get_appointments,
    get_appointment,
    create_appointment,
    update_appointment,
    delete_appointment,
)

router = APIRouter(
    prefix="/api/appointments",
    tags=["Appointments"],
)


@router.get("/", response_model=list[AppointmentResponse])
def read_appointments(
    db: Session = Depends(get_db),
):
    return get_appointments(db)


@router.get("/{appointment_id}",
            response_model=AppointmentResponse)
def read_appointment(
    appointment_id: int,
    db: Session = Depends(get_db),
):
    return get_appointment(
        db,
        appointment_id,
    )


@router.post("/",
             response_model=AppointmentResponse)
def add_appointment(
    appointment: AppointmentCreate,
    db: Session = Depends(get_db),
):
    return create_appointment(
        db,
        appointment,
    )


@router.put("/{appointment_id}",
            response_model=AppointmentResponse)
def edit_appointment(
    appointment_id: int,
    appointment: AppointmentCreate,
    db: Session = Depends(get_db),
):
    return update_appointment(
        db,
        appointment_id,
        appointment,
    )


@router.delete("/{appointment_id}")
def remove_appointment(
    appointment_id: int,
    db: Session = Depends(get_db),
):

    delete_appointment(
        db,
        appointment_id,
    )

    return {
        "message": "Appointment Deleted Successfully"
    }