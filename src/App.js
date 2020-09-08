import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";
import Message from "./Message";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    const name = prompt("Please Enter Your Name...");
    setUsername(name);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://khrakib.com/wp-content/uploads/2020/07/LogoMakr_5gu73o-1-50x58.png"
        alt="KH Rakib"
      />
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form className="form__container">
        <FormControl className="form__flex">
          <div className="input__Box">
            <InputLabel>Enter a message...</InputLabel>
            <Input
              style={{ width: "100%" }}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
          <Button
            className="input__btn"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
