function KnowledgeCard({

    disease,

}) {

    if (!disease) return null;

    return (

        <div className="knowledge-card">

            <h2>

                {disease.title}

            </h2>

            <p>

                <strong>Description:</strong>

                {" "}

                {disease.description}

            </p>

            <h3>

                Symptoms

            </h3>

            <ul>

                {

                    disease.symptoms.map(

                        (item, index) => (

                            <li key={index}>

                                {item}

                            </li>

                        )

                    )

                }

            </ul>

            <h3>

                Medicines

            </h3>

            <ul>

                {

                    disease.medicines.map(

                        (item, index) => (

                            <li key={index}>

                                {item}

                            </li>

                        )

                    )

                }

            </ul>

            <h3>

                Precautions

            </h3>

            <ul>

                {

                    disease.precautions.map(

                        (item, index) => (

                            <li key={index}>

                                {item}

                            </li>

                        )

                    )

                }

            </ul>

        </div>

    );

}

export default KnowledgeCard;