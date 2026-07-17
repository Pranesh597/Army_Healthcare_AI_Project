import { useState } from "react";

function LoginForm({ onSubmit }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {

        e.preventDefault();

        onSubmit({
            username,
            password,
        });

    };

    return (

        <form
            className="login-form"
            onSubmit={submit}
        >

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

            <button type="submit">
                Login
            </button>

        </form>

    );

}

export default LoginForm;