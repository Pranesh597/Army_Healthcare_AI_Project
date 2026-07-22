import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Army Admin");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await api.post(
                "/login",
                {
                    username,
                    password,
                    role,
                }
            );

            localStorage.setItem(
                "token",
                response.data.access_token
            );

            localStorage.setItem(
                "role",
                response.data.role
            );

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            setError("Invalid Username, Password or Role");

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>Army Healthcare AI</h1>

                <p>
                    Ensuring Sustainable and Secure Army Healthcare through AI-Powered Intelligence
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="Army Admin">Army Admin</option>
                        <option value="Military Doctor">Military Doctor</option>
                        <option value="Security Analyst">Security Analyst</option>
                    </select>

                    {error && (

                        <p
                            style={{
                                color: "red",
                                marginBottom: "10px",
                            }}
                        >
                            {error}
                        </p>

                    )}

                    <button type="submit">

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;