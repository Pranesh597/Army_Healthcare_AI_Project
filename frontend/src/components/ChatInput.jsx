import { useState } from "react";

function ChatInput({

    onSend,

}) {

    const [message, setMessage] = useState("");

    const send = () => {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            send();

        }

    };

    return (

        <div className="chat-input">

            <input
                type="text"
                placeholder="Type your question..."
                value={message}
                onChange={(e) =>
                    setMessage(e.target.value)
                }
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={send}
            >
                Send
            </button>

        </div>

    );

}

export default ChatInput;