from datetime import datetime


def generate_report(result):

    report = f"""
==========================================
        ARMY HEALTHCARE AI REPORT
==========================================

Generated On
------------
{datetime.now().strftime("%d-%m-%Y %H:%M")}

Predicted Disease
-----------------
{result["prediction"]}

Description
-----------
{result["description"]}

Recommended Medicines
---------------------
"""

    for medicine in result["medicines"]:
        report += f"\n• {medicine}"

    report += "\n\nPrecautions\n------------"

    for precaution in result["precautions"]:
        report += f"\n• {precaution}"

    report += """

==========================================
        Army Healthcare AI System
==========================================
"""

    return report