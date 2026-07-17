import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/DashboardLayout.css";

function DashboardLayout({ children }) {

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-content">

                <Topbar />

                <div className="page-content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;