import { useState, useEffect } from "react";

function User() {
  const [text, setText] = useState("");

  // useEffect runs whenever text changes
  useEffect(() => {
    setText("User typed:",); 
  }, [text]);

  return (
    <div>
      <h1>Assignment 3</h1>

      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        className="border p-2"
      />

      <h2>You typed: {text}</h2>
    </div>
  );
}

export default User;
