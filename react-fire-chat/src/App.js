import "./App.css";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth"
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>
        <div className="logo">
          <div>
            <img src="/logo.png" alt="Logo Firechat" />
          </div>
          <div>
            <h1>Firechat</h1>
            <h2>React Firebase Chat</h2>
          </div>
        </div>
        <div className="user"></div>
      </header>
      {
        user ? (
          <ChatRoom firestore={firestore} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )
      }
    </div>
  );
}

export default App;