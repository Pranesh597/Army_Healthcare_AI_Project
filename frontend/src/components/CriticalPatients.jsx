function CriticalPatients({

    patients,

}) {

    const critical = patients.filter(
        (patient) =>
            patient.status === "Critical"
    );

    return (

        <div className="dashboard-table">

            <h2>Critical Patients</h2>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Disease</th>

                    </tr>

                </thead>

                <tbody>

                    {critical.slice(0,5).map((patient)=>(

                        <tr key={patient.id}>

                            <td>{patient.name}</td>

                            <td>{patient.disease}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default CriticalPatients;