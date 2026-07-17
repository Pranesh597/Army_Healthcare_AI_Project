import { deleteDoctor } from "../services/doctorService";

function DoctorTable({ doctors, onRefresh }) {

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    );

    if (!confirmDelete) return;

    try {

      await deleteDoctor(id);

      alert("Doctor Deleted Successfully");

      if (onRefresh) {
        onRefresh();
      }

    } catch (error) {

      console.error(error);

      alert("Failed to Delete Doctor");

    }

  };

  return (

    <div className="doctor-table">

      <h2>Doctors List</h2>

      <table>

        <thead>

          <tr>

            <th>Doctor ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Department</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {doctors.length === 0 ? (

            <tr>
              <td colSpan="9">
                No Doctors Found
              </td>
            </tr>

          ) : (

            doctors.map((doctor) => (

              <tr key={doctor.id}>

                <td>{doctor.doctor_id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.department}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.email}</td>
                <td>{doctor.experience} Years</td>
                <td>{doctor.status}</td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default DoctorTable;