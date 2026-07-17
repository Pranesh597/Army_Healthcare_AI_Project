import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import ThemeToggle from "../components/ThemeToggle";
import NotificationSettings from "../components/NotificationSettings";

import "../styles/Settings.css";

function Settings() {

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-content">

                <Topbar
                    title="Settings"
                />

                <div className="settings-page">

                    <ThemeToggle />

                    <NotificationSettings />

                </div>

            </div>

        </div>

    );

}

export default Settings;