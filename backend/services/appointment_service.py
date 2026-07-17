from sqlalchemy.orm import Session

from models.appointment import Appointment
from schemas.appointment_schema import AppointmentCreate


def get_appointments(db: Session):
    return db.query(Appointment).all()


def get_appointment(db: Session, appointment_id: int):
    return (
        db.query(Appointment)
        .filter(Appointment.id == appointment_id)
        .first()
    )


def create_appointment(
    db: Session,
    appointment: AppointmentCreate,
):
    db_appointment = Appointment(
        **appointment.model_dump()
    )

    db.add(db_appointment)

    db.commit()

    db.refresh(db_appointment)

    return db_appointment


def update_appointment(
    db: Session,
    appointment_id: int,
    appointment: AppointmentCreate,
):

    db_appointment = get_appointment(
        db,
        appointment_id,
    )

    if db_appointment:

        for key, value in appointment.model_dump().items():
            setattr(db_appointment, key, value)

        db.commit()

        db.refresh(db_appointment)

    return db_appointment


def delete_appointment(
    db: Session,
    appointment_id: int,
):

    db_appointment = get_appointment(
        db,
        appointment_id,
    )

    if db_appointment:

        db.delete(db_appointment)

        db.commit()

    return db_appointment