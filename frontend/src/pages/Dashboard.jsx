import { Link } from "react-router-dom";

import "../styles/Dashboard.css";

function Dashboard() {

    return (

        <div className="dashboard">

            <h1>Army Healthcare AI Dashboard</h1>

            <div className="dashboard-grid">

                <Link
                    to="/patients"
                    className="dashboard-card"
                >
                    👨‍⚕️
                    <h2>Patients</h2>
                    <p>Manage Patients</p>
                </Link>

                <Link
                    to="/medical-records"
                    className="dashboard-card"
                >
                    📄
                    <h2>Medical Records</h2>
                    <p>Patient Records</p>
                </Link>

                <Link
                    to="/medical-reports"
                    className="dashboard-card"
                >
                    📂
                    <h2>Medical Reports</h2>
                    <p>Upload & Download Reports</p>
                </Link>

                <Link
                    to="/doctors"
                    className="dashboard-card"
                >
                    🩺
                    <h2>Doctors</h2>
                    <p>Doctor Management</p>
                </Link>

                <Link
                    to="/appointments"
                    className="dashboard-card"
                >
                    📅
                    <h2>Appointments</h2>
                    <p>Appointment Scheduling</p>
                </Link>

                <Link
                    to="/analytics"
                    className="dashboard-card"
                >
                    📊
                    <h2>Analytics</h2>
                    <p>Hospital Analytics</p>
                </Link>

                <Link
                    to="/ai-prediction"
                    className="dashboard-card ai-card"
                >
                    🤖
                    <h2>AI Prediction</h2>
                    <p>Disease Prediction</p>
                </Link>

                <Link
                    to="/ai-chat"
                    className="dashboard-card"
                >
                    💬
                    <h2>AI Assistant</h2>
                    <p>Healthcare Chatbot</p>
                </Link>

                <Link
                    to="/knowledge-base"
                    className="dashboard-card"
                >
                    📚
                    <h2>Knowledge Base</h2>
                    <p>Medical Information</p>
                </Link>

            </div>

        </div>

    );

}

export default Dashboard;