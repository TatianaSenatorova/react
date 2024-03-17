
import React, { useRef, useEffect } from "react";

const RefExample = () => {
    const inputRef = useRef(null);
const handleClick = () =>{
    inputRef.current.focus();
};
useEffect(() =>{
inputRef.current.focus();

}, [])


    return (  
    <div>
       <input type="text" ref={inputRef}></input>
       <button onClick={handleClick}>Фокус</button>
    </div>
    );
}

export default RefExample;