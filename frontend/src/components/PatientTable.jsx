import { deletePatient } from "../services/patientService";

function PatientTable({
  patients,
  onRefresh,
  onEdit,
}) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    try {
      await deletePatient(id);

      alert("Patient Deleted Successfully");

      onRefresh();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="patient-table">

      <h2>Patient Records</h2>

      <table>

        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Status</th>
            <th>Admitted Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {patients.length === 0 ? (

            <tr>
              <td colSpan="10">
                No Patients Found
              </td>
            </tr>

          ) : (

            patients.map((patient) => (

              <tr key={patient.id}>

                <td>{patient.patient_id}</td>

                <td>{patient.name}</td>

                <td>{patient.age}</td>

                <td>{patient.gender}</td>

                <td>{patient.blood_group}</td>

                <td>{patient.disease}</td>

                <td>{patient.doctor}</td>

                <td>
                  <span
                    className={
                      patient.status === "Stable"
                        ? "stable"
                        : patient.status === "Critical"
                        ? "critical"
                        : "recovered"
                    }
                  >
                    {patient.status}
                  </span>
                </td>

                <td>{patient.admitted_date}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(patient)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(patient.id)}
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

export default PatientTable;