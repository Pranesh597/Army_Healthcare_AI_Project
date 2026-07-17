import { Navigate } from "react-router-dom";

function SecurityRoute({

    children,

}) {

    const role = localStorage.getItem("role");

    if (role !== "Security Analyst") {

        return <Navigate to="/dashboard" />;

    }

    return children;

}

export default SecurityRoute;