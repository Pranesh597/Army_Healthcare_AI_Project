import { useEffect, useState } from "react";

import { getPatients } from "../services/patientService";
import { uploadReport } from "../services/medicalReportService";

function MedicalReportForm({

    onSuccess,

}) {

    const [patients, setPatients] = useState([]);

    const [patientId, setPatientId] = useState("");

    const [title, setTitle] = useState("");

    const [reportType, setReportType] = useState("Blood Test");

    const [file, setFile] = useState(null);

    useEffect(() => {

        loadPatients();

    }, []);

    const loadPatients = async () => {

        try {

            const data = await getPatients();

            setPatients(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!patientId || !title || !file) {

            alert("Please fill all fields.");

            return;

        }

        const formData = new FormData();

        formData.append(
            "patient_id",
            patientId
        );

        formData.append(
            "title",
            title
        );

        formData.append(
            "report_type",
            reportType
        );

        formData.append(
            "file",
            file
        );

        try {

            await uploadReport(
                formData
            );

            alert("Report uploaded successfully.");

            setPatientId("");
            setTitle("");
            setReportType("Blood Test");
            setFile(null);

            if (onSuccess) {

                onSuccess();

            }

        }

        catch (error) {

            console.log(error);

            alert("Upload failed.");

        }

    };

    return (

        <form
            className="report-form"
            onSubmit={handleSubmit}
        >

            <h2>

                Upload Medical Report

            </h2>

            <select
                value={patientId}
                onChange={(e) =>
                    setPatientId(
                        e.target.value
                    )
                }
            >

                <option value="">

                    Select Patient

                </option>

                {

                    patients.map(

                        (patient) => (

                            <option
                                key={patient.id}
                                value={patient.id}
                            >

                                {patient.name}

                            </option>

                        )

                    )

                }

            </select>

            <input
                type="text"
                placeholder="Report Title"
                value={title}
                onChange={(e) =>
                    setTitle(
                        e.target.value
                    )
                }
            />

            <select
                value={reportType}
                onChange={(e) =>
                    setReportType(
                        e.target.value
                    )
                }
            >

                <option>

                    Blood Test

                </option>

                <option>

                    X-Ray

                </option>

                <option>

                    MRI

                </option>

                <option>

                    CT Scan

                </option>

                <option>

                    ECG

                </option>

                <option>

                    Other

                </option>

            </select>

            <input
                type="file"
                onChange={(e) =>
                    setFile(
                        e.target.files[0]
                    )
                }
            />

            <button type="submit">

                Upload Report

            </button>

        </form>

    );

}

export default MedicalReportForm;