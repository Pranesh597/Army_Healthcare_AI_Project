import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getMedicalRecords } from "../services/medicalService";

import MedicalForm from "../components/MedicalForm";
import MedicalTable from "../components/MedicalTable";

import "../styles/MedicalRecords.css";

function MedicalRecords() {

    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const [search, setSearch] = useState("");

    const loadRecords = async () => {

        try {

            const data = await getMedicalRecords(search);

            setRecords(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadRecords();

    }, [search]);

    return (

        <DashboardLayout>

            <div className="medical-page">

                <h1 className="page-title">
                    Medical Records
                </h1>

                <div className="toolbar">

                    <input
                        type="text"
                        placeholder="🔍 Search Medical Record..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                <MedicalForm
                    selectedRecord={selectedRecord}
                    onSuccess={() => {

                        loadRecords();

                        setSelectedRecord(null);

                    }}
                />

                <MedicalTable
                    records={records}
                    onRefresh={loadRecords}
                    onEdit={setSelectedRecord}
                />

            </div>

        </DashboardLayout>

    );

}

export default MedicalRecords;