import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
// import ListItemText from '@mui/material/ListItemText';

// Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.
// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

function TodoList() {
  const [inputValue, setinputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  function updateInputValue(event) {
    event.preventDefault();
    setinputValue(event.target.value);
  }

  function addListItem() {
    if (!inputValue.trim()) {
      return;
    }
    setListItems([...listItems, inputValue]);
    setinputValue("");
  }

  function deleteListItem(itemToRemove){
    setListItems(listItems.filter((item, index) => index !== itemToRemove));
  }

  return (
    <div className="content-box">
      <form className="form">
        <TextField
          id="filled-basic"
          variant="filled"
          value={inputValue}
          onChange={updateInputValue}
        />
        <Button onClick={addListItem} variant="outlined">
          Добавить в список
        </Button>
      </form>

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            List Items
          </ListSubheader>
        }
      >
        {listItems.map((item, index) => (
          <div className="list-item">
          <ListItemText key={index}>
            {" "}
            {item}
            
          </ListItemText>
          <DeleteForeverTwoToneIcon onClick={() => deleteListItem(index)}/>
          </div>
        ))}
      </List>
   
    </div>
  );
}

export default TodoList;
