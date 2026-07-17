import api from "./api";

export const getDoctors = async () => {
  const response = await api.get("/doctors");
  return response.data;
};

export const getDoctor = async (id) => {
  const response = await api.get(`/doctors/${id}`);
  return response.data;
};

export const addDoctor = async (doctor) => {
  const response = await api.post("/doctors", doctor);
  return response.data;
};

export const updateDoctor = async (id, doctor) => {
  const response = await api.put(`/doctors/${id}`, doctor);
  return response.data;
};

export const deleteDoctor = async (id) => {
  const response = await api.delete(`/doctors/${id}`);
  return response.data;
};