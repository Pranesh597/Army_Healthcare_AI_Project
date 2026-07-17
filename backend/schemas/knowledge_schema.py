from pydantic import BaseModel
from typing import List


class KnowledgeRequest(BaseModel):

    query: str


class DiseaseInfo(BaseModel):

    title: str

    description: str

    symptoms: List[str]

    medicines: List[str]

    precautions: List[str]


class KnowledgeResponse(BaseModel):

    success: bool

    count: int

    results: List[DiseaseInfo]