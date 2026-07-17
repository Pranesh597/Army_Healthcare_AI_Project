export const isAdmin = () => {
    return localStorage.getItem("role") === "Admin";
};

export const isDoctor = () => {
    return localStorage.getItem("role") === "Doctor";
};

export const isReceptionist = () => {
    return localStorage.getItem("role") === "Receptionist";
};