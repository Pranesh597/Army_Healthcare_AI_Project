from config.gemini_config import model

try:
    response = model.generate_content("Say hello in one sentence.")
    print(response.text)
except Exception as e:
    print(type(e).__name__)
    print(e)
    