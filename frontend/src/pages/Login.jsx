import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await api.post(
                "/users/login",
                {
                    username,
                    password,
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

            setError("Invalid Username or Password");

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