import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import MedicalReportForm from "../components/MedicalReportForm";
import MedicalReportTable from "../components/MedicalReportTable";

import "../styles/MedicalReports.css";

function MedicalReports() {

    const [refresh, setRefresh] = useState(false);

    const reloadReports = () => {

        setRefresh(!refresh);

    };

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-content">

                <Topbar
                    title="Medical Reports"
                />

                <div className="medical-reports-page">

                    <MedicalReportForm
                        onSuccess={reloadReports}
                    />

                    <MedicalReportTable
                        refresh={refresh}
                    />

                </div>

            </div>

        </div>

    );

}

export default MedicalReports;