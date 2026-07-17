ADMIN = "Army Admin"

DOCTOR = "Military Doctor"

SECURITY = "Security Analyst"


PERMISSIONS = {

    ADMIN: [

        "dashboard",
        "patients",
        "doctors",
        "medical-records",
        "medical-reports",
        "appointments",
        "analytics",
        "ai-prediction",
        "ai-chat",
        "knowledge-base",

    ],

    DOCTOR: [

        "dashboard",
        "patients",
        "medical-records",
        "medical-reports",
        "appointments",
        "ai-prediction",

    ],

    SECURITY: [

        "dashboard",
        "analytics",
        "ai-chat",
        "knowledge-base",

    ],

}