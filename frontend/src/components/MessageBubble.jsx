function MessageBubble({

    sender,
    text,

}) {

    return (

        <div
            className={
                sender === "user"
                    ? "message user-message"
                    : "message ai-message"
            }
        >

            <p>{text}</p>

        </div>

    );

}

export default MessageBubble;