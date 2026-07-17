function RecentPatients({

    patients,

}) {

    return (

        <div className="dashboard-table">

            <h2>Recent Patients</h2>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {patients.slice(0,5).map((patient)=>(

                        <tr key={patient.id}>

                            <td>{patient.patient_id}</td>

                            <td>{patient.name}</td>

                            <td>{patient.status}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecentPatients;