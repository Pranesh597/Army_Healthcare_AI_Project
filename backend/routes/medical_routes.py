from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db

from schemas.medical_schema import (
    MedicalRecordCreate,
    MedicalRecordResponse,
)

from services.medical_service import (
    get_all_records,
    get_record_by_id,
    create_record,
    update_record,
    delete_record,
)

router = APIRouter(
    prefix="/medical-records",
    tags=["Medical Records"],
)


@router.get("/", response_model=list[MedicalRecordResponse])
def read_records(db: Session = Depends(get_db)):
    return get_all_records(db)


@router.get("/{record_id}", response_model=MedicalRecordResponse)
def read_record(record_id: int, db: Session = Depends(get_db)):
    record = get_record_by_id(db, record_id)

    if record is None:
        raise HTTPException(
            status_code=404,
            detail="Medical Record Not Found",
        )

    return record


@router.post("/", response_model=MedicalRecordResponse)
def add_record(
    record: MedicalRecordCreate,
    db: Session = Depends(get_db),
):
    return create_record(db, record)


@router.put("/{record_id}", response_model=MedicalRecordResponse)
def edit_record(
    record_id: int,
    record: MedicalRecordCreate,
    db: Session = Depends(get_db),
):
    updated = update_record(db, record_id, record)

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Medical Record Not Found",
        )

    return updated


@router.delete("/{record_id}")
def remove_record(
    record_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_record(db, record_id)

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Medical Record Not Found",
        )

    return deleted