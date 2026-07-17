import { deleteMedicalRecord } from "../services/medicalService";

function MedicalRecordTable({ records, onRefresh }) {

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this medical record?"
    );

    if (!confirmDelete) return;

    try {

      await deleteMedicalRecord(id);

      alert("Medical Record Deleted Successfully");

      if (onRefresh) {
        onRefresh();
      }

    } catch (error) {

      console.error(error);

      alert("Failed to Delete Medical Record");

    }

  };

  return (

    <div className="medical-table">

      <h2>Medical Records</h2>

      <table>

        <thead>

          <tr>

            <th>Patient ID</th>

            <th>Doctor</th>

            <th>Diagnosis</th>

            <th>Treatment</th>

            <th>Prescription</th>

            <th>Visit Date</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {records.length === 0 ? (

            <tr>

              <td colSpan="7">
                No Medical Records Found
              </td>

            </tr>

          ) : (

            records.map((record) => (

              <tr key={record.id}>

                <td>{record.patient_id}</td>

                <td>{record.doctor}</td>

                <td>{record.diagnosis}</td>

                <td>{record.treatment}</td>

                <td>{record.prescription}</td>

                <td>{record.visit_date}</td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(record.id)}
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

export default MedicalRecordTable;