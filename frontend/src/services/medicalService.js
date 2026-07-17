import api from "./api";

export const getMedicalRecords = async () => {
  const response = await api.get("/medical-records");
  return response.data;
};

export const getMedicalRecord = async (id) => {
  const response = await api.get(`/medical-records/${id}`);
  return response.data;
};

export const addMedicalRecord = async (record) => {
  const response = await api.post("/medical-records", record);
  return response.data;
};

export const updateMedicalRecord = async (id, record) => {
  const response = await api.put(`/medical-records/${id}`, record);
  return response.data;
};

export const deleteMedicalRecord = async (id) => {
  const response = await api.delete(`/medical-records/${id}`);
  return response.data;
};