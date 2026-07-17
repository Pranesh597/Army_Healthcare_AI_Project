import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getAppointments } from "../services/appointmentService";

import AppointmentForm from "../components/AppointmentForm";
import AppointmentTable from "../components/AppointmentTable";

import "../styles/Appointments.css";

function Appointments() {

    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const [search, setSearch] = useState("");

    const loadAppointments = async () => {

        try {

            const data = await getAppointments(search);

            setAppointments(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadAppointments();

    }, [search]);

    return (

        <DashboardLayout>

            <div className="appointments-page">

                <h1 className="page-title">
                    Appointment Management
                </h1>

                <div className="toolbar">

                    <input
                        type="text"
                        placeholder="🔍 Search Appointment..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                <AppointmentForm
                    selectedAppointment={selectedAppointment}
                    onSuccess={() => {

                        loadAppointments();

                        setSelectedAppointment(null);

                    }}
                />

                <AppointmentTable
                    appointments={appointments}
                    onRefresh={loadAppointments}
                    onEdit={setSelectedAppointment}
                />

            </div>

        </DashboardLayout>

    );

}

export default Appointments;