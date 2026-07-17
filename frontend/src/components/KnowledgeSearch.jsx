import React from "react";

function KnowledgeSearch({ onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const disease = e.target.disease.value.trim();

        if (onSearch && disease) {
            onSearch(disease);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg shadow mb-4"
        >
            <input
                name="disease"
                type="text"
                placeholder="Search Disease..."
                className="border p-2 rounded w-full"
            />

            <button
                type="submit"
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Search
            </button>
        </form>
    );
}

export default KnowledgeSearch;