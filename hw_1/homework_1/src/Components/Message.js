// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание Установить расширение React Devtools.

function Message({ text }) {
  return <h2 className="message">{text}</h2>;
}

export default Message;
