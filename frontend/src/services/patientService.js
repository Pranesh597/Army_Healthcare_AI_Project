import api from "./api";

export const getPatients = async (
    search = "",
    page = 1,
    limit = 10
) => {

    const response = await api.get("/patients", {
        params: {
            search,
            page,
            limit,
        },
    });

    return response.data;
};

export const getPatient = async (id) => {

    const response = await api.get(`/patients/${id}`);

    return response.data;
};

export const addPatient = async (patient) => {

    const response = await api.post("/patients", patient);

    return response.data;
};

export const updatePatient = async (id, patient) => {

    const response = await api.put(`/patients/${id}`, patient);

    return response.data;
};

export const deletePatient = async (id) => {

    const response = await api.delete(`/patients/${id}`);

    return response.data;
};