from sqlalchemy.orm import Session

from models.doctor import Doctor
from schemas.doctor_schema import DoctorCreate


def get_doctors(db: Session):
    return db.query(Doctor).all()


def get_doctor(db: Session, doctor_id: int):
    return db.query(Doctor).filter(Doctor.id == doctor_id).first()


def create_doctor(db: Session, doctor: DoctorCreate):
    db_doctor = Doctor(**doctor.model_dump())

    db.add(db_doctor)
    db.commit()
    db.refresh(db_doctor)

    return db_doctor


def update_doctor(db: Session, doctor_id: int, doctor: DoctorCreate):
    db_doctor = get_doctor(db, doctor_id)

    if db_doctor:
        for key, value in doctor.model_dump().items():
            setattr(db_doctor, key, value)

        db.commit()
        db.refresh(db_doctor)

    return db_doctor


def delete_doctor(db: Session, doctor_id: int):
    db_doctor = get_doctor(db, doctor_id)

    if db_doctor:
        db.delete(db_doctor)
        db.commit()

    return db_doctor