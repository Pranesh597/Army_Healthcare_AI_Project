from utils.prompt_template import SYSTEM_PROMPT


def get_ai_reply(message: str):

    message = message.lower()

    if "fever" in message:
        return "Fever may be caused by viral or bacterial infections. Stay hydrated and consult a doctor if symptoms persist."

    if "covid" in message:
        return "COVID-19 commonly causes fever, cough, sore throat, fatigue and breathing difficulty."

    if "flu" in message:
        return "Flu is a viral infection. Rest, hydration and prescribed medicines usually help recovery."

    if "malaria" in message:
        return "Malaria spreads through mosquito bites. Early diagnosis and antimalarial treatment are important."

    if "doctor" in message:
        return "Please schedule an appointment with the appropriate specialist using the Appointment module."

    return "I'm here to assist with healthcare-related questions. Please provide more details."