import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import MedicalRecords from "./pages/MedicalRecords";
import MedicalReports from "./pages/MedicalReports";
import Appointments from "./pages/Appointments";
import Analytics from "./pages/Analytics";
import AIPrediction from "./pages/AIPrediction";
import AIChat from "./pages/AIChat";
import KnowledgeBase from "./pages/KnowledgeBase";

import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/patients"
                    element={
                        <ProtectedRoute>
                            <Patients />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/doctors"
                    element={
                        <ProtectedRoute>
                            <Doctors />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/medical-records"
                    element={
                        <ProtectedRoute>
                            <MedicalRecords />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/medical-reports"
                    element={
                        <ProtectedRoute>
                            <MedicalReports />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/appointments"
                    element={
                        <ProtectedRoute>
                            <Appointments />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/analytics"
                    element={
                        <ProtectedRoute>
                            <Analytics />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/ai-prediction"
                    element={
                        <ProtectedRoute>
                            <AIPrediction />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/ai-chat"
                    element={
                        <ProtectedRoute>
                            <AIChat />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/knowledge-base"
                    element={
                        <ProtectedRoute>
                            <KnowledgeBase />
                        </ProtectedRoute>
                    }
                />

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
            />

        </BrowserRouter>

    </React.StrictMode>

);