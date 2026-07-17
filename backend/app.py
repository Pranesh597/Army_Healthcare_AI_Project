from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import Base, engine

from models.user import User
from models.patient import Patient
from models.doctor import Doctor
from models.medical_record import MedicalRecord
from models.appointment import Appointment
from models.profile import Profile

from routes.auth_routes import router as auth_router
from routes.user_routes import router as user_router
from routes.profile_routes import router as profile_router
from routes.dashboard_routes import router as dashboard_router
from routes.patient_routes import router as patient_router
from routes.medical_routes import router as medical_router
from routes.doctor_routes import router as doctor_router
from routes.appointment_routes import router as appointment_router
from routes.ai_routes import router as ai_router
from routes.analytics_routes import router as analytics_router
from routes.chatbot_routes import router as chatbot_router
from routes.knowledge_routes import router as knowledge_router
from routes.gemini_routes import router as gemini_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Army Healthcare AI API",
    version="2.4.0",
    description="AI-Powered Army Healthcare Management System"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api")
app.include_router(user_router, prefix="/api")
app.include_router(profile_router)
app.include_router(dashboard_router, prefix="/api")
app.include_router(patient_router, prefix="/api")
app.include_router(medical_router, prefix="/api")
app.include_router(doctor_router, prefix="/api")
app.include_router(appointment_router, prefix="/api")
app.include_router(ai_router)
app.include_router(analytics_router)
app.include_router(chatbot_router)
app.include_router(knowledge_router)
app.include_router(gemini_router)

@app.get("/")
def home():
    return {
        "message": "Army Healthcare AI Backend is Running Successfully!",
        "version": "2.4.0",
        "status": "Running"
    }

@app.get("/health")
def health():
    return {
        "status": "Healthy",
        "database": "Connected",
        "api": "Running"
    }