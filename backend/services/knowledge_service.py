from ai.knowledge_base import knowledge_base


def get_all_diseases():

    return list(knowledge_base.keys())


def get_disease(disease: str):

    disease = disease.lower().strip()

    return knowledge_base.get(disease)


def search_disease(query: str):

    query = query.lower().strip()

    results = []

    for key, value in knowledge_base.items():

        if query in key:

            results.append(value)

            continue

        if query in value["title"].lower():

            results.append(value)

            continue

        if query in value["description"].lower():

            results.append(value)

            continue

        if any(query in symptom.lower() for symptom in value["symptoms"]):

            results.append(value)

            continue

        if any(query in medicine.lower() for medicine in value["medicines"]):

            results.append(value)

            continue

        if any(query in precaution.lower() for precaution in value["precautions"]):

            results.append(value)

    return results


def ask_knowledge(query: str):

    results = search_disease(query)

    if len(results) == 0:

        return {

            "success": False,

            "message": "No matching disease or healthcare information found."

        }

    return {

        "success": True,

        "count": len(results),

        "results": results

    }