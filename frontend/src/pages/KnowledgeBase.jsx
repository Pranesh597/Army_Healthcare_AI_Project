import { useState } from "react";

import KnowledgeSearch from "../components/KnowledgeSearch";
import KnowledgeCard from "../components/KnowledgeCard";

import {
    searchDisease,
} from "../services/knowledgeService";

import "../styles/KnowledgeBase.css";

function KnowledgeBase() {

    const [disease, setDisease] = useState(null);

    const [message, setMessage] = useState("");

    const handleSearch = async (query) => {

        if (!query.trim()) {

            setDisease(null);

            setMessage("Please enter a disease name.");

            return;

        }

        try {

            const response = await searchDisease(query);

            if (response.success) {

                setDisease(response.result);

                setMessage("");

            }

            else {

                setDisease(null);

                setMessage(response.message);

            }

        }

        catch {

            setDisease(null);

            setMessage("Unable to connect to the server.");

        }

    };

    return (

        <div className="knowledge-page">

            <h1>

                📚 Healthcare Knowledge Base

            </h1>

            <KnowledgeSearch

                onSearch={handleSearch}

            />

            {

                message && (

                    <p className="knowledge-message">

                        {message}

                    </p>

                )

            }

            {

                disease && (

                    <KnowledgeCard

                        disease={disease}

                    />

                )

            }

        </div>

    );

}

export default KnowledgeBase;