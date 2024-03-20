import { useState, useEffect } from "react";

//создаем компонент 
const InputForm = () => {
  const [inputValue, setinputValue] = useState("");
  const [submittedValue, setsetsubmittedValue] = useState("");

//   useEffect - это ловушка, которая позволяет выполнять побочные эффекты в функциональных компонентах. Для большей детализации эти эффекты выполняются только после рендеринга компонента, поэтому не блокируют сам рендеринг.С помощью хука эффекта useEffect вы можете выполнять побочные эффекты из функционального компонента
  useEffect(() => {
    console.log("Input value changed: ", inputValue);
  }, [inputValue]);

const handleSubmit = (e) =>{
    e.preventDefault();
    setsetsubmittedValue(inputValue);
    setinputValue('');
};

return (
<div>
    {/* у формы есть действие сабмит */}
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)}></input>
        <button type="submit">submit</button>
    </form>
    {submittedValue && <p>Submitted value: {submittedValue}</p>}
</div>

)
}
export default InputForm;