from fastapi import APIRouter

from schemas.knowledge_schema import (
    KnowledgeRequest,
)

from services.knowledge_service import (
    get_all_diseases,
    get_disease,
    ask_knowledge,
)

router = APIRouter(
    prefix="/api/knowledge",
    tags=["Knowledge Base"],
)


@router.get("/")
def read_all_diseases():

    return {
        "diseases": get_all_diseases()
    }


@router.get("/search/{disease}")
def search_disease(disease: str):

    result = get_disease(disease)

    if result is None:

        return {
            "success": False,
            "message": "Disease not found."
        }

    return {
        "success": True,
        "result": result
    }


@router.post("/ask")
def ask(request: KnowledgeRequest):

    return ask_knowledge(
        request.query
    )