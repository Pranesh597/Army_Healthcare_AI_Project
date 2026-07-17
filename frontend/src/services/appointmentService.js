import api from "./api";

export const getAppointments = async () => {
    const response = await api.get("/appointments");
    return response.data;
};

export const getAppointment = async (id) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
};

export const addAppointment = async (appointment) => {
    const response = await api.post("/appointments", appointment);
    return response.data;
};

export const updateAppointment = async (id, appointment) => {
    const response = await api.put(`/appointments/${id}`, appointment);
    return response.data;
};

export const deleteAppointment = async (id) => {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
};