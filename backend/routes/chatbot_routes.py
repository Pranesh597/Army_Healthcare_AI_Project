from fastapi import APIRouter

from schemas.chat_schema import (
    ChatRequest,
    ChatResponse,
)

from services.chat_service import get_ai_reply

router = APIRouter(
    prefix="/api/chat",
    tags=["AI Chat"],
)


@router.post(
    "/",
    response_model=ChatResponse,
)
def chat(request: ChatRequest):

    reply = get_ai_reply(
        request.message
    )

    return {
        "reply": reply
    }