from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os


def create_pdf(result):

    os.makedirs("reports", exist_ok=True)

    filepath = os.path.join(
        "reports",
        "medical_report.pdf"
    )

    doc = SimpleDocTemplate(filepath)

    styles = getSampleStyleSheet()

    story = []

    story.append(
        Paragraph(
            "Army Healthcare AI Medical Report",
            styles["Title"]
        )
    )

    story.append(
        Paragraph(
            f"<b>Predicted Disease:</b> {result['prediction']}",
            styles["Heading2"]
        )
    )

    story.append(
        Paragraph(
            result["description"],
            styles["BodyText"]
        )
    )

    story.append(
        Paragraph(
            "<b>Medicines</b>",
            styles["Heading2"]
        )
    )

    for medicine in result["medicines"]:
        story.append(
            Paragraph(
                "• " + medicine,
                styles["BodyText"]
            )
        )

    story.append(
        Paragraph(
            "<b>Precautions</b>",
            styles["Heading2"]
        )
    )

    for precaution in result["precautions"]:
        story.append(
            Paragraph(
                "• " + precaution,
                styles["BodyText"]
            )
        )

    doc.build(story)

    return filepath