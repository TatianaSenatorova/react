import { messages } from "./data";
import Message from "./Massege";

// Создайте компонент MessagesList, который отображает список сообщений. Каждое сообщение должно иметь уникальный id и текст.
// Используйте проп key при рендеринге списка, чтобы обеспечить оптимальную производительность.
export default function MessagesList() {
  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </>
  );
}
