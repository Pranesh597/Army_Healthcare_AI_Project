import MessageBubble from "./MessageBubble";

function ChatWindow({

    messages,
    loading,

}) {

    return (

        <div className="chat-window">

            {

                messages.map((message, index) => (

                    <MessageBubble
                        key={index}
                        sender={message.sender}
                        text={message.text}
                    />

                ))

            }

            {

                loading && (

                    <MessageBubble
                        sender="ai"
                        text="Typing..."
                    />

                )

            }

        </div>

    );

}

export default ChatWindow;