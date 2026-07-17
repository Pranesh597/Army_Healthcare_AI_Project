import { NavLink, useNavigate } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/");

    };

    return (

        <aside className="sidebar">

            <div>

                <div className="logo">

                    <h2>🪖 Army Healthcare AI</h2>

                    <p>{role}</p>

                </div>

                <nav>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        🏠 Dashboard
                    </NavLink>

                    {role === "Army Admin" && (

                        <>

                            <NavLink
                                to="/patients"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                👨‍⚕️ Patients
                            </NavLink>

                            <NavLink
                                to="/doctors"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                🩺 Doctors
                            </NavLink>

                            <NavLink
                                to="/medical-records"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📄 Medical Records
                            </NavLink>

                            <NavLink
                                to="/medical-reports"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📂 Medical Reports
                            </NavLink>

                            <NavLink
                                to="/appointments"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📅 Appointments
                            </NavLink>

                            <NavLink
                                to="/analytics"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📊 Analytics
                            </NavLink>

                            <NavLink
                                to="/ai-prediction"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                🤖 AI Prediction
                            </NavLink>

                            <NavLink
                                to="/ai-chat"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                💬 AI Assistant
                            </NavLink>

                            <NavLink
                                to="/knowledge-base"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📚 Knowledge Base
                            </NavLink>

                        </>

                    )}

                    {role === "Military Doctor" && (

                        <>

                            <NavLink
                                to="/patients"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                👨‍⚕️ Patients
                            </NavLink>

                            <NavLink
                                to="/medical-records"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📄 Medical Records
                            </NavLink>

                            <NavLink
                                to="/medical-reports"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📂 Medical Reports
                            </NavLink>

                            <NavLink
                                to="/appointments"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📅 Appointments
                            </NavLink>

                            <NavLink
                                to="/ai-prediction"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                🤖 AI Prediction
                            </NavLink>

                        </>

                    )}

                    {role === "Security Analyst" && (

                        <>

                            <NavLink
                                to="/analytics"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📊 Analytics
                            </NavLink>

                            <NavLink
                                to="/ai-chat"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                💬 AI Assistant
                            </NavLink>

                            <NavLink
                                to="/knowledge-base"
                                className={({ isActive }) =>
                                    isActive ? "nav-item active" : "nav-item"
                                }
                            >
                                📚 Knowledge Base
                            </NavLink>

                        </>

                    )}

                </nav>

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                🚪 Logout
            </button>

        </aside>

    );

}

export default Sidebar;