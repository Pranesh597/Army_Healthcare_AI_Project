import { useState } from "react";
import { addAppointment } from "../services/appointmentService";

function AppointmentForm({ onSuccess }) {

    const [appointment, setAppointment] = useState({
        appointment_id: "",
        patient_id: "",
        doctor_id: "",
        appointment_date: "",
        appointment_time: "",
        appointment_type: "Consultation",
        status: "Scheduled",
        notes: ""
    });

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addAppointment(appointment);

            alert("Appointment Scheduled Successfully");

            setAppointment({
                appointment_id: "",
                patient_id: "",
                doctor_id: "",
                appointment_date: "",
                appointment_time: "",
                appointment_type: "Consultation",
                status: "Scheduled",
                notes: ""
            });

            if (onSuccess) {
                onSuccess();
            }

        } catch (error) {

            console.error(error);

            alert("Failed to Schedule Appointment");

        }

    };

    return (

        <div className="appointment-form">

            <h2>Schedule Appointment</h2>

            <form
                onSubmit={handleSubmit}
                className="appointment-grid"
            >

                <input
                    type="text"
                    name="appointment_id"
                    placeholder="Appointment ID"
                    value={appointment.appointment_id}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="patient_id"
                    placeholder="Patient ID"
                    value={appointment.patient_id}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="doctor_id"
                    placeholder="Doctor ID"
                    value={appointment.doctor_id}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="appointment_date"
                    value={appointment.appointment_date}
                    onChange={handleChange}
                    required
                />

                <input
                    type="time"
                    name="appointment_time"
                    value={appointment.appointment_time}
                    onChange={handleChange}
                    required
                />

                <select
                    name="appointment_type"
                    value={appointment.appointment_type}
                    onChange={handleChange}
                >
                    <option>Consultation</option>
                    <option>Emergency</option>
                    <option>Follow Up</option>
                </select>

                <select
                    name="status"
                    value={appointment.status}
                    onChange={handleChange}
                >
                    <option>Scheduled</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                </select>

                <textarea
                    name="notes"
                    placeholder="Notes"
                    rows="4"
                    value={appointment.notes}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="add-btn"
                >
                    Schedule Appointment
                </button>

            </form>

        </div>

    );

}

export default AppointmentForm;