import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getPatients } from "../services/patientService";

import PatientForm from "../components/PatientForm";
import PatientTable from "../components/PatientTable";

import "../styles/Patients.css";

function Patients() {

    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [page, setPage] = useState(1);

    const limit = 10;

    const loadPatients = async () => {

        try {

            let data = await getPatients(
                search,
                page,
                limit
            );

            if (statusFilter !== "All") {

                data = data.filter(
                    (patient) =>
                        patient.status === statusFilter
                );

            }

            setPatients(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadPatients();

    }, [search, statusFilter, page]);

    return (

        <DashboardLayout>

            <div className="patients-page">

                <h1 className="page-title">
                    Patient Management
                </h1>

                <div className="toolbar">

                    <input
                        type="text"
                        placeholder="🔍 Search Patient..."
                        value={search}
                        onChange={(e) => {

                            setPage(1);

                            setSearch(e.target.value);

                        }}
                    />

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }
                    >
                        <option>All</option>
                        <option>Stable</option>
                        <option>Critical</option>
                        <option>Recovered</option>
                    </select>

                </div>

                <PatientForm
                    selectedPatient={selectedPatient}
                    onSuccess={() => {

                        loadPatients();

                        setSelectedPatient(null);

                    }}
                />

                <PatientTable
                    patients={patients}
                    onRefresh={loadPatients}
                    onEdit={setSelectedPatient}
                />

                <div className="pagination">

                    <button
                        disabled={page === 1}
                        onClick={() =>
                            setPage(page - 1)
                        }
                    >
                        Previous
                    </button>

                    <span>
                        Page {page}
                    </span>

                    <button
                        onClick={() =>
                            setPage(page + 1)
                        }
                    >
                        Next
                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Patients;