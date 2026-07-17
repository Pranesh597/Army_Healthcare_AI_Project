import { useState } from "react";
import { addDoctor } from "../services/doctorService";

function DoctorForm({ onSuccess }) {
  const [doctor, setDoctor] = useState({
    doctor_id: "",
    name: "",
    specialization: "",
    department: "",
    phone: "",
    email: "",
    experience: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoctor({
        ...doctor,
        experience: Number(doctor.experience),
      });

      alert("Doctor Added Successfully");

      setDoctor({
        doctor_id: "",
        name: "",
        specialization: "",
        department: "",
        phone: "",
        email: "",
        experience: "",
        status: "Available",
      });

      if (onSuccess) {
        onSuccess();
      }

    } catch (error) {
      console.error(error);
      alert("Failed to Add Doctor");
    }
  };

  return (
    <div className="doctor-form">

      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit} className="doctor-grid">

        <input
          type="text"
          name="doctor_id"
          placeholder="Doctor ID"
          value={doctor.doctor_id}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={doctor.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={doctor.department}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={doctor.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={doctor.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={doctor.experience}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={doctor.status}
          onChange={handleChange}
        >
          <option value="Available">Available</option>
          <option value="Busy">Busy</option>
          <option value="On Leave">On Leave</option>
        </select>

        <button
          type="submit"
          className="add-btn"
        >
          Add Doctor
        </button>

      </form>

    </div>
  );
}

export default DoctorForm;