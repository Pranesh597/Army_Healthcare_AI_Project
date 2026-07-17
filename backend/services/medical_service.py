from sqlalchemy.orm import Session

from models.medical_record import MedicalRecord
from schemas.medical_schema import MedicalRecordCreate


def get_all_records(db: Session):
    return db.query(MedicalRecord).all()


def get_record_by_id(db: Session, record_id: int):
    return (
        db.query(MedicalRecord)
        .filter(MedicalRecord.id == record_id)
        .first()
    )


def create_record(
    db: Session,
    record: MedicalRecordCreate,
):
    new_record = MedicalRecord(
        patient_id=record.patient_id,
        patient_name=record.patient_name,
        doctor_name=record.doctor_name,
        diagnosis=record.diagnosis,
        prescription=record.prescription,
        blood_pressure=record.blood_pressure,
        heart_rate=record.heart_rate,
        temperature=record.temperature,
        report_file=record.report_file,
        xray_file=record.xray_file,
        mri_file=record.mri_file,
        created_date=record.created_date,
    )

    db.add(new_record)
    db.commit()
    db.refresh(new_record)

    return new_record


def update_record(
    db: Session,
    record_id: int,
    record: MedicalRecordCreate,
):
    medical_record = get_record_by_id(db, record_id)

    if medical_record is None:
        return None

    medical_record.patient_id = record.patient_id
    medical_record.patient_name = record.patient_name
    medical_record.doctor_name = record.doctor_name
    medical_record.diagnosis = record.diagnosis
    medical_record.prescription = record.prescription
    medical_record.blood_pressure = record.blood_pressure
    medical_record.heart_rate = record.heart_rate
    medical_record.temperature = record.temperature
    medical_record.report_file = record.report_file
    medical_record.xray_file = record.xray_file
    medical_record.mri_file = record.mri_file
    medical_record.created_date = record.created_date

    db.commit()
    db.refresh(medical_record)

    return medical_record


def delete_record(
    db: Session,
    record_id: int,
):
    medical_record = get_record_by_id(db, record_id)

    if medical_record is None:
        return None

    db.delete(medical_record)
    db.commit()

    return {
        "message": "Medical Record Deleted Successfully"
    }