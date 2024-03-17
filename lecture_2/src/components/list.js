import { useState } from "react";

function MessageList() {
  const [messages, setMessage] = useState([
    { id: "id1", text: "message 1", heading: "heading 1" },
    { id: "id2", text: "message 2", heading: "heading 2" },
    { id: "id3", text: "message 3", heading: "heading 3" },
  ]);

  return messages.map((message) => 
//  <> - вот это называется реакт фрагмент. ставится, чтобы не ставить дополнительный див. иначе программа ругается.   
    <>
      <h2>{message.heading}</h2>
      <div key={message.id}>{message.text}</div>
    </>
  );
}

export default MessageList;
