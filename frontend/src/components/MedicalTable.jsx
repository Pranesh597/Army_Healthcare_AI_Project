import React from "react";

function MedicalTable({ records = [] }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h2 className="text-xl font-bold">
                Medical Records Table
            </h2>

            <p>Total Records: {records.length}</p>
        </div>
    );
}

export default MedicalTable;