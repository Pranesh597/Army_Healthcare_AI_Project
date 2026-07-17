import { useEffect, useState } from "react";

import {
    getAppointments,
    deleteAppointment
} from "../services/appointmentService";

function AppointmentTable({ refresh }) {

    const [appointments, setAppointments] = useState([]);

    const loadAppointments = async () => {
        try {
            const data = await getAppointments();
            setAppointments(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadAppointments();
    }, [refresh]);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this appointment?"))
            return;

        try {

            await deleteAppointment(id);

            loadAppointments();

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="appointment-table">

            <h2>Appointments List</h2>

            <table>

                <thead>

                    <tr>

                        <th>Appointment ID</th>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {appointments.length === 0 ? (

                        <tr>

                            <td colSpan="9">
                                No Appointments Found
                            </td>

                        </tr>

                    ) : (

                        appointments.map((appointment) => (

                            <tr key={appointment.id}>

                                <td>{appointment.appointment_id}</td>

                                <td>{appointment.patient_id}</td>

                                <td>{appointment.doctor_id}</td>

                                <td>{appointment.appointment_date}</td>

                                <td>{appointment.appointment_time}</td>

                                <td>{appointment.appointment_type}</td>

                                <td>{appointment.status}</td>

                                <td>{appointment.notes}</td>

                                <td>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            handleDelete(
                                                appointment.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default AppointmentTable;