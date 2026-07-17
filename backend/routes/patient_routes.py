from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db

from schemas.patient_schema import (
    PatientCreate,
    PatientResponse,
)

from services.patient_service import (
    get_all_patients,
    get_patient_by_id,
    create_patient,
    update_patient,
    delete_patient,
)

router = APIRouter(
    prefix="/patients",
    tags=["Patients"],
)


@router.get("/", response_model=list[PatientResponse])
def read_patients(
    search: str = "",
    page: int = 1,
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return get_all_patients(
        db,
        search,
        page,
        limit,
    )


@router.get("/{patient_id}", response_model=PatientResponse)
def read_patient(
    patient_id: int,
    db: Session = Depends(get_db),
):
    patient = get_patient_by_id(db, patient_id)

    if patient is None:
        raise HTTPException(
            status_code=404,
            detail="Patient not found",
        )

    return patient


@router.post("/", response_model=PatientResponse)
def add_patient(
    patient: PatientCreate,
    db: Session = Depends(get_db),
):
    return create_patient(db, patient)


@router.put("/{patient_id}", response_model=PatientResponse)
def edit_patient(
    patient_id: int,
    patient: PatientCreate,
    db: Session = Depends(get_db),
):
    updated = update_patient(db, patient_id, patient)

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Patient not found",
        )

    return updated


@router.delete("/{patient_id}")
def remove_patient(
    patient_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_patient(db, patient_id)

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Patient not found",
        )

    return {
        "message": "Patient deleted successfully"
    }