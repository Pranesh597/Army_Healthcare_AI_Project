import api from "./api";

export const login = async (credentials) => {

    const response = await api.post(
        "/users/login",
        credentials
    );

    return response.data;
};

export const register = async (user) => {

    const response = await api.post(
        "/users/register",
        user
    );

    return response.data;
};

export const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

};