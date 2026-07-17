import { Navigate } from "react-router-dom";

function DoctorRoute({

    children,

}) {

    const role = localStorage.getItem("role");

    if (role !== "Military Doctor") {

        return <Navigate to="/dashboard" />;

    }

    return children;

}

export default DoctorRoute;