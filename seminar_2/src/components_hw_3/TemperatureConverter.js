import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../App.css";

// Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
    setFahrenheit(((parseFloat(event.target.value) * 9) / 5 + 32).toFixed(1));
  };

  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
    setCelsius(((parseFloat(event.target.value) - 32) * (5 / 9)).toFixed(1));
  };

  return (
    <div className="container">
      <label className="container__item">
        {" "}
        В Цельсиях:
        <TextField
          className="temperature-input"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </label>
      <label className="container__item">
        {" "}
        В Фаренгейтах:
        <TextField
          className="temperature-input"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </label>
      <Button
        onClick={() => {
          setCelsius("");
          setFahrenheit("");
        }}
      >
        Удалить данные
      </Button>
    </div>
  );
};

export default TemperatureConverter;
