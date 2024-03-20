import Text from "./TextField";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// Создать React компонент TextDisplayForm, который позволяет пользователю ввести текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию кнопки.
// Создание поля ввода (TextField)
// Добавить TextField для ввода текста пользователем.
// Установить метку (label) поля ввода на "Введите текст".
// Сделать поле ввода на всю ширину (fullWidth).
// Разместить кнопку под полем ввода.
// Установить текст кнопки на "Отобразить текст".
// При нажатии на кнопку введенный текст должен отображаться под кнопкой.

export default function TextDisplayForm() {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleSubmit = () => {
    setDisplayedText(text);
    console.log(displayedText);
    setText("");
  };

  return (
    <>
      <label htmlFor="outlined-size-normal">Введите текст</label>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            fullWidth
            value={text}
            onChange={handleChange}
            margin="normal"
            label="Size"
            id="outlined-size-normal"
          />
        </div>
      </Box>
      <Button onClick={handleSubmit} variant="contained" disableElevation>
        Отобразить текст
      </Button>
      <Typography variant="h1" component="h2">
        {displayedText}
      </Typography>
    </>
  );
}
