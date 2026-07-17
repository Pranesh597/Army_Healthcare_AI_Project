function RecentAppointments({

    appointments,

}) {

    return (

        <div className="dashboard-table">

            <h2>Recent Appointments</h2>

            <table>

                <thead>

                    <tr>

                        <th>Patient</th>

                        <th>Doctor</th>

                    </tr>

                </thead>

                <tbody>

                    {appointments.slice(0,5).map((item)=>(

                        <tr key={item.id}>

                            <td>{item.patient_name}</td>

                            <td>{item.doctor_name}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecentAppointments;