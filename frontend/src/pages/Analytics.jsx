import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getAnalytics } from "../services/analyticsService";

import ChartCard from "../components/ChartCard";

import "../styles/Analytics.css";

function Analytics() {

    const [data, setData] = useState(null);

    useEffect(() => {

        loadAnalytics();

    }, []);

    const loadAnalytics = async () => {

        try {

            const response = await getAnalytics();

            setData(response);

        }

        catch (error) {

            console.log(error);

        }

    };

    if (!data) {

        return (

            <DashboardLayout>

                <h2>Loading Analytics...</h2>

            </DashboardLayout>

        );

    }

    const hospitalData = [

        {
            name: "Patients",
            value: data.patients
        },

        {
            name: "Doctors",
            value: data.doctors
        },

        {
            name: "Appointments",
            value: data.appointments
        },

        {
            name: "Medical Records",
            value: data.medical_records
        }

    ];

    return (

        <DashboardLayout>

            <div className="analytics-page">

                <h1>Hospital Analytics Dashboard</h1>

                <div className="stats-grid">

                    <div className="stat-card">

                        <h2>{data.patients}</h2>

                        <p>Total Patients</p>

                    </div>

                    <div className="stat-card">

                        <h2>{data.doctors}</h2>

                        <p>Total Doctors</p>

                    </div>

                    <div className="stat-card">

                        <h2>{data.appointments}</h2>

                        <p>Appointments</p>

                    </div>

                    <div className="stat-card">

                        <h2>{data.medical_records}</h2>

                        <p>Medical Records</p>

                    </div>

                </div>

                <ChartCard

                    title="Hospital Overview"

                    data={hospitalData}

                />

            </div>

        </DashboardLayout>

    );

}

export default Analytics;