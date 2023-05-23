import "./ChatRoom.css";
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { useRef, useState } from "react";

function ChatRoom({firestore, auth}) {

  const messagesRef = collection(firestore, "messages");
  const dbQuery = query(messagesRef, orderBy("createdAt"), limit(25));
  const collectionDataOption = { idField: "id" };
  const [messages] = useCollectionData(dbQuery, collectionDataOption);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(auth.currentUser);
    const { uid, photoURL, displayName } = auth.currentUser;
  
    const docRef = await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });
    
    setFormValue("");
  };

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
          <form onSubmit={sendMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Vamos conversar"
              type="text"
            />
            <button type="submit" disabled={!formValue}>
              <img src="./sent.png" alt="Botão de enviar" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
