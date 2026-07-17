import os
import joblib
import pandas as pd

from ai.disease_info import DISEASE_INFO

# Load Trained Model
MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "disease_model.pkl"
)

model = joblib.load(MODEL_PATH)


def predict_disease(data):

    df = pd.DataFrame([{
        "fever": data["fever"],
        "cough": data["cough"],
        "headache": data["headache"],
        "fatigue": data["fatigue"],
        "body_pain": data["body_pain"],
        "vomiting": data["vomiting"],
        "age": data["age"]
    }])

    # Prediction
    prediction = model.predict(df)[0]

    # Confidence
    if hasattr(model, "predict_proba"):
        confidence = float(model.predict_proba(df).max()) * 100
    else:
        confidence = 100.0

    # Disease Details
    info = DISEASE_INFO.get(
        prediction,
        {
            "severity": "Unknown",
            "department": "General Medicine",
            "medicines": [],
            "advice": []
        }
    )

    return {
        "prediction": prediction,
        "confidence": round(confidence, 2),
        "severity": info["severity"],
        "department": info["department"],
        "medicines": info["medicines"],
        "advice": info["advice"]
    }