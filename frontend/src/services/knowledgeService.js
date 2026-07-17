import api from "./api";

export const getAllDiseases = async () => {

    const response = await api.get(
        "/knowledge"
    );

    return response.data;

};

export const searchDisease = async (disease) => {

    const response = await api.get(
        `/knowledge/search/${disease}`
    );

    return response.data;

};

export const askKnowledge = async (query) => {

    const response = await api.post(
        "/knowledge/ask",
        {
            query,
        }
    );

    return response.data;

};