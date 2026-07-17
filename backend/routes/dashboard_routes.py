from fastapi import APIRouter

router = APIRouter()

@router.get("/dashboard")
def dashboard():
    return {
        "total_patients": 1284,
        "doctors": 126,
        "threats": 18,
        "emergency": 9,
        "mission_readiness": 94,
        "healthcare_score": 97
    }