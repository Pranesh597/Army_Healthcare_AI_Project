import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getDoctors } from "../services/doctorService";

import DoctorForm from "../components/DoctorForm";
import DoctorTable from "../components/DoctorTable";

import "../styles/Doctors.css";

function Doctors() {

    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const [search, setSearch] = useState("");

    const loadDoctors = async () => {

        try {

            const data = await getDoctors(search);

            setDoctors(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadDoctors();

    }, [search]);

    return (

        <DashboardLayout>

            <div className="doctors-page">

                <h1 className="page-title">
                    Doctor Management
                </h1>

                <div className="toolbar">

                    <input
                        type="text"
                        placeholder="🔍 Search Doctor..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                <DoctorForm
                    selectedDoctor={selectedDoctor}
                    onSuccess={() => {

                        loadDoctors();

                        setSelectedDoctor(null);

                    }}
                />

                <DoctorTable
                    doctors={doctors}
                    onRefresh={loadDoctors}
                    onEdit={setSelectedDoctor}
                />

            </div>

        </DashboardLayout>

    );

}

export default Doctors;