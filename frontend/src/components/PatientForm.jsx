import { useEffect, useState } from "react";

import {
  addPatient,
  updatePatient,
} from "../services/patientService";

function PatientForm({
  selectedPatient,
  onSuccess,
}) {
  const initialState = {
    patient_id: "",
    name: "",
    age: "",
    gender: "Male",
    blood_group: "O+",
    disease: "",
    doctor: "",
    status: "Stable",
    admitted_date: "",
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedPatient) {
      setForm({
        patient_id: selectedPatient.patient_id,
        name: selectedPatient.name,
        age: selectedPatient.age,
        gender: selectedPatient.gender,
        blood_group: selectedPatient.blood_group,
        disease: selectedPatient.disease,
        doctor: selectedPatient.doctor,
        status: selectedPatient.status,
        admitted_date: selectedPatient.admitted_date,
      });
    } else {
      setForm(initialState);
    }
  }, [selectedPatient]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedPatient) {
        await updatePatient(selectedPatient.id, form);
        alert("Patient Updated Successfully");
      } else {
        await addPatient(form);
        alert("Patient Added Successfully");
      }

      setForm(initialState);

      onSuccess();

    } catch (error) {
      console.log(error);
      alert("Operation Failed");
    }
  };

  return (
    <div className="patient-form">

      <h2>
        {selectedPatient ? "Update Patient" : "Add Patient"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <input
            name="patient_id"
            placeholder="Patient ID"
            value={form.patient_id}
            onChange={handleChange}
            required
          />

          <input
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            name="blood_group"
            placeholder="Blood Group"
            value={form.blood_group}
            onChange={handleChange}
          />

          <input
            name="disease"
            placeholder="Disease"
            value={form.disease}
            onChange={handleChange}
          />

          <input
            name="doctor"
            placeholder="Doctor"
            value={form.doctor}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Stable</option>
            <option>Critical</option>
            <option>Recovered</option>
          </select>

          <input
            type="date"
            name="admitted_date"
            value={form.admitted_date}
            onChange={handleChange}
          />

        </div>

        <button
          className="add-btn"
          type="submit"
        >
          {selectedPatient ? "Update Patient" : "Add Patient"}
        </button>

      </form>

    </div>
  );
}

export default PatientForm;