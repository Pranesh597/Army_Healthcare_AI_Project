from fastapi import APIRouter

from pydantic import BaseModel

from services.gemini_service import ask_gemini


router = APIRouter(

    prefix="/api/gemini",

    tags=["Gemini AI"]

)


class ChatRequest(BaseModel):

    question: str


@router.post("/chat")
def chat(data: ChatRequest):

    answer = ask_gemini(

        data.question

    )

    return {

        "answer": answer

    }