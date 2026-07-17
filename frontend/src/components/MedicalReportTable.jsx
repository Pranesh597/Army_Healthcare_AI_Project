import {
    useEffect,
    useState,
} from "react";

import {
    getReports,
    deleteReport,
    downloadReport,
} from "../services/medicalReportService";

function MedicalReportTable({

    refresh,

}) {

    const [reports, setReports] = useState([]);

    useEffect(() => {

        loadReports();

    }, [refresh]);

    const loadReports = async () => {

        try {

            const data = await getReports();

            setReports(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this report?"
        );

        if (!confirmDelete) {

            return;

        }

        try {

            await deleteReport(id);

            loadReports();

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="report-table">

            <h2>

                Uploaded Reports

            </h2>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Patient</th>

                        <th>Title</th>

                        <th>Type</th>

                        <th>File</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        reports.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                >

                                    No Reports Found

                                </td>

                            </tr>

                        ) : (

                            reports.map(

                                (report) => (

                                    <tr
                                        key={report.id}
                                    >

                                        <td>

                                            {report.id}

                                        </td>

                                        <td>

                                            {report.patient_id}

                                        </td>

                                        <td>

                                            {report.title}

                                        </td>

                                        <td>

                                            {report.report_type}

                                        </td>

                                        <td>

                                            {report.file_name}

                                        </td>

                                        <td>

                                            <button
                                                onClick={() =>
                                                    downloadReport(
                                                        report.id
                                                    )
                                                }
                                            >

                                                Download

                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        report.id
                                                    )
                                                }
                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                )

                            )

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default MedicalReportTable;