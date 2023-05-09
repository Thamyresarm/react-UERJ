import ChatMessage from "./ChatMessage";


function ChatRoom({firestore, auth}) {

const messages = [];

  return (
    <>
      <div className="chat-room">
        <main>
          {
            messages && messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} auth={auth} />
            ))
          }
        </main>
        <div className="form">
          <form>
            <input
              placeholder="Vamos conversar"
              type="text"
            />
            <button type="submit">
              <img src="./sent.png" alt="Botão de enviar" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
