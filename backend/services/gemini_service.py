from config.gemini_config import model


def ask_gemini(question: str):
    try:
        response = model.generate_content(question)
        return response.text
    except Exception as e:
        print("Gemini Error:", e)
        raise