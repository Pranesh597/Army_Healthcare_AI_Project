import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { predictDisease } from "../services/aiService";

import "../styles/AIPrediction.css";

function AIPrediction() {

    const [formData, setFormData] = useState({
        fever: 0,
        cough: 0,
        headache: 0,
        fatigue: 0,
        body_pain: 0,
        vomiting: 0,
        age: 25,
    });

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: Number(value),
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await predictDisease(formData);

            setResult(response);

        }

        catch (error) {

            console.log(error);

            alert("Prediction Failed");

        }

        setLoading(false);

    };

    return (

        <DashboardLayout>

            <div className="ai-page">

                <h1>AI Disease Prediction</h1>

                <form
                    onSubmit={handleSubmit}
                    className="ai-form"
                >

                    <div className="grid">

                        <div>

                            <label>Fever</label>

                            <select
                                name="fever"
                                value={formData.fever}
                                onChange={handleChange}
                            >
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select>

                        </div>

                        <div>

                            <label>Cough</label>

                            <select
                                name="cough"
                                value={formData.cough}
                                onChange={handleChange}
                            >
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select>

                        </div>

                        <div>

                            <label>Headache</label>

                            <select
                                name="headache"
                                value={formData.headache}
                                onChange={handleChange}
                            >
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select>

                        </div>

                        <div>

                            <label>Fatigue</label>

                            <select
                                name="fatigue"
                                value={formData.fatigue}
                                onChange={handleChange}
                            >
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select>

                        </div>

                        <div>

                            <label>Body Pain</label>

                            <select
                                name="body_pain"
                                value={formData.body_pain}
                                onChange={handleChange}
                            >
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select>

                        </div>

                        <div>

                            <label>Vomiting</label>

                            <select
                                name="vomiting"
                                value={formData.vomiting}
                                onChange={handleChange}
                            >
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select>

                        </div>

                        <div>

                            <label>Age</label>

                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Predicting..." : "Predict Disease"}
                    </button>

                </form>

                {result && (

                    <div className="result-card">

                        <div className="prediction-box">

                            <h2>Predicted Disease</h2>

                            <h1>{result.prediction}</h1>

                        </div>

                        <div className="info-grid">

                            <div className="info-card">

                                <h3>Description</h3>

                                <p>{result.description}</p>

                            </div>

                            <div className="info-card">

                                <h3>Medicines</h3>

                                <ul>

                                    {result.medicines.map((medicine, index) => (

                                        <li key={index}>
                                            {medicine}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="info-card">

                                <h3>Precautions</h3>

                                <ul>

                                    {result.precautions.map((item, index) => (

                                        <li key={index}>
                                            {item}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </DashboardLayout>

    );

}

export default AIPrediction;