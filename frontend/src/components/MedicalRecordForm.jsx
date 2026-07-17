import { useState } from "react";
import { addMedicalRecord } from "../services/medicalService";

function MedicalRecordForm({ onSuccess }) {
  const [form, setForm] = useState({
    patient_id: "",
    doctor: "",
    diagnosis: "",
    treatment: "",
    prescription: "",
    visit_date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addMedicalRecord(form);

      alert("Medical Record Added Successfully");

      setForm({
        patient_id: "",
        doctor: "",
        diagnosis: "",
        treatment: "",
        prescription: "",
        visit_date: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to Add Medical Record");
    }
  };

  return (
    <div className="medical-form">
      <h2>Add Medical Record</h2>

      <form onSubmit={handleSubmit} className="form-grid">

        <input
          type="text"
          name="patient_id"
          placeholder="Patient ID"
          value={form.patient_id}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={form.doctor}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="diagnosis"
          placeholder="Diagnosis"
          value={form.diagnosis}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="treatment"
          placeholder="Treatment"
          value={form.treatment}
          onChange={handleChange}
          required
        />

        <textarea
          name="prescription"
          placeholder="Prescription"
          value={form.prescription}
          onChange={handleChange}
          rows="4"
          required
        />

        <input
          type="date"
          name="visit_date"
          value={form.visit_date}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="add-btn"
        >
          Add Medical Record
        </button>

      </form>
    </div>
  );
}

export default MedicalRecordForm;
