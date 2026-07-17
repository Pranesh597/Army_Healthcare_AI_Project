from pydantic import BaseModel


class DiseaseRequest(BaseModel):
    fever: int
    cough: int
    headache: int
    fatigue: int
    body_pain: int
    vomiting: int
    age: int


class DiseaseResponse(BaseModel):
    prediction: str
    confidence: float
    severity: str
    department: str
    medicines: list[str]
    advice: list[str]