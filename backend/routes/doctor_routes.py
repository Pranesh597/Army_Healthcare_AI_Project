from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db

from schemas.doctor_schema import (
    DoctorCreate,
    DoctorResponse,
)

from services.doctor_service import (
    get_doctors,
    get_doctor,
    create_doctor,
    update_doctor,
    delete_doctor,
)

router = APIRouter(
    prefix="/api/doctors",
    tags=["Doctors"],
)


@router.get("/", response_model=list[DoctorResponse])
def read_doctors(db: Session = Depends(get_db)):
    return get_doctors(db)


@router.get("/{doctor_id}", response_model=DoctorResponse)
def read_doctor(
    doctor_id: int,
    db: Session = Depends(get_db),
):
    return get_doctor(db, doctor_id)


@router.post("/", response_model=DoctorResponse)
def add_doctor(
    doctor: DoctorCreate,
    db: Session = Depends(get_db),
):
    return create_doctor(db, doctor)


@router.put("/{doctor_id}", response_model=DoctorResponse)
def edit_doctor(
    doctor_id: int,
    doctor: DoctorCreate,
    db: Session = Depends(get_db),
):
    return update_doctor(
        db,
        doctor_id,
        doctor,
    )


@router.delete("/{doctor_id}")
def remove_doctor(
    doctor_id: int,
    db: Session = Depends(get_db),
):
    delete_doctor(db, doctor_id)

    return {
        "message": "Doctor Deleted Successfully"
    }