import "./ChatMessage.css";

function ChatMessage(props) {

  const messageClass = "sent";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="bubble">
            <img
              className="avatar"
              alt="Foto de Avatar"
              src={photoURL || "https://api.dicebear.com/6.x/bottts/png"}
            />
          <div className="display-message">
           <strong>Thamyres Magalhães</strong>
            <p>Essa é uma mensagem de placeholder</p>
            <small>08/05/2023 </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMessage;
