import api from "./api";

export const predictDisease = async (data) => {

    const response = await api.post(
        "/ai/predict",
        data
    );

    return response.data;

};

export const generateReport = async (data) => {

    const response = await api.post(
        "/ai/report",
        data
    );

    return response.data;

};

export const askAI = async (message) => {

    const response = await api.post(
        "/chat",
        {
            message,
        }
    );

    return response.data;

};