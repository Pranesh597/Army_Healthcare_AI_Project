from sqlalchemy.orm import Session
from sqlalchemy import or_

from models.patient import Patient
from schemas.patient_schema import PatientCreate


def get_all_patients(
    db: Session,
    search: str = "",
    page: int = 1,
    limit: int = 10,
):

    query = db.query(Patient)

    if search:

        query = query.filter(
            or_(
                Patient.patient_id.ilike(f"%{search}%"),
                Patient.name.ilike(f"%{search}%"),
                Patient.disease.ilike(f"%{search}%"),
                Patient.doctor.ilike(f"%{search}%"),
                Patient.status.ilike(f"%{search}%"),
            )
        )

    offset = (page - 1) * limit

    return (
        query
        .offset(offset)
        .limit(limit)
        .all()
    )


def get_patient_by_id(db: Session, patient_id: int):
    return db.query(Patient).filter(Patient.id == patient_id).first()


def create_patient(db: Session, patient: PatientCreate):

    new_patient = Patient(
        patient_id=patient.patient_id,
        name=patient.name,
        age=patient.age,
        gender=patient.gender,
        blood_group=patient.blood_group,
        disease=patient.disease,
        doctor=patient.doctor,
        status=patient.status,
        admitted_date=patient.admitted_date,
    )

    db.add(new_patient)
    db.commit()
    db.refresh(new_patient)

    return new_patient


def update_patient(db: Session, patient_id: int, patient: PatientCreate):

    existing_patient = db.query(Patient).filter(
        Patient.id == patient_id
    ).first()

    if not existing_patient:
        return None

    existing_patient.patient_id = patient.patient_id
    existing_patient.name = patient.name
    existing_patient.age = patient.age
    existing_patient.gender = patient.gender
    existing_patient.blood_group = patient.blood_group
    existing_patient.disease = patient.disease
    existing_patient.doctor = patient.doctor
    existing_patient.status = patient.status
    existing_patient.admitted_date = patient.admitted_date

    db.commit()
    db.refresh(existing_patient)

    return existing_patient


def delete_patient(db: Session, patient_id: int):

    patient = db.query(Patient).filter(
        Patient.id == patient_id
    ).first()

    if not patient:
        return None

    db.delete(patient)
    db.commit()

    return {
        "message": "Patient deleted successfully"
    }