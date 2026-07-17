from fastapi import APIRouter

from schemas.ai_schema import (
    DiseaseRequest,
    DiseaseResponse,
)

from ai.predict import predict_disease
from utils.report_generator import generate_report
from utils.pdf_generator import create_pdf

router = APIRouter(
    prefix="/api/ai",
    tags=["AI Prediction"],
)


@router.post(
    "/predict",
    response_model=DiseaseResponse
)
def predict(request: DiseaseRequest):

    result = predict_disease(
        request.model_dump()
    )

    return result


@router.post("/report")
def report(request: DiseaseRequest):

    result = predict_disease(
        request.model_dump()
    )

    report = generate_report(result)

    return {
        "report": report
    }


@router.post("/download-report")
def download_report(request: DiseaseRequest):

    result = predict_disease(
        request.model_dump()
    )

    filepath = create_pdf(result)

    return {
        "message": "PDF Generated Successfully",
        "file": filepath
    }