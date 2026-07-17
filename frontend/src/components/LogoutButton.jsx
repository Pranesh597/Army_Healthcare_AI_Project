import { useNavigate } from "react-router-dom";

function LogoutButton() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/");

    };

    return (

        <button
            className="logout-btn"
            onClick={handleLogout}
        >
            Logout
        </button>

    );

}

export default LogoutButton;