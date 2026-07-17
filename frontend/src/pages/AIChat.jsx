import { useState } from "react";

import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

import { askAI } from "../services/aiService";

import "../styles/AIChat.css";

function AIChat() {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello! I am your Army Healthcare AI Assistant. How can I help you today?"
        }
    ]);

    const [loading, setLoading] = useState(false);

    const sendMessage = async (message) => {

        if (!message.trim()) return;

        const updatedMessages = [
            ...messages,
            {
                sender: "user",
                text: message
            }
        ];

        setMessages(updatedMessages);
        setLoading(true);

        try {

            const response = await askAI(message);

            setMessages([
                ...updatedMessages,
                {
                    sender: "ai",
                    text: response.answer || response.response || "No response received."
                }
            ]);

        }

        catch (error) {

            setMessages([
                ...updatedMessages,
                {
                    sender: "ai",
                    text: "Unable to connect to the AI server."
                }
            ]);

        }

        setLoading(false);

    };

    return (

        <div className="chat-page">

            <h1>Army Healthcare AI Assistant</h1>

            <ChatWindow
                messages={messages}
                loading={loading}
            />

            <ChatInput
                onSend={sendMessage}
            />

        </div>

    );

}

export default AIChat;