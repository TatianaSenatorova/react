import { useState } from "react";

// Список комментариев с удалением
// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.
// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку

//   const [comments, setComments] = useState([
//     { id: 1, text: "Это первый комментарий" },
//     { id: 2, text: "Это второй комментарий" },
//     { id: 3, text: "Это третий комментарий" }
//   ]);

function CommentsList() {
  const [inputComment, setinputComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  function addComment() {
    if (!inputComment.trim()) {
      return;
    }
    setinputComment(comments.push({id: `${(new Date()).getTime()}`, text: `${inputComment}`})
   );
    setinputComment("");
  }

  const deleteComment = (commentToRemove) => {
    setComments(comments.filter((item, index) => index !== commentToRemove))
  };

  return (
    <>
      <label htmlFor="input">Введите комментарий: </label>
      <input
        onChange={(event) => setinputComment(event.target.value)}
        type="text"
        id="input"
        value={inputComment}
      ></input>
      <button onClick={addComment}>Click to add</button>
      <ul>
        {comments.map((item) => (
          <li key={comments.indexOf(item)}>
            {item.text}{" "}
            <button onClick={() => deleteComment(comments.indexOf(item))}>
              Click to delete
            </button>
          </li>
        ))}
      </ul>
   </>
  );
}

export default CommentsList;
