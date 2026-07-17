import api from "./api";

export const getProfile = async (username) => {

    const response = await api.get(
        `/profile/${username}`
    );

    return response.data;

};

export const updateProfile = async (
    username,
    profile
) => {

    const response = await api.put(
        `/profile/${username}`,
        profile
    );

    return response.data;

};

export const changePassword = async (
    username,
    password
) => {

    const response = await api.put(
        `/profile/change-password/${username}`,
        password
    );

    return response.data;

};