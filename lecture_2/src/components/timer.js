import { useEffect, useState } from "react";

function Timer() {
// useEffect
const [time, setTime] = useState(new Date());
//setTime функция для обновления time
//useEffect вызывается постоянно
useEffect(()=>{
const timer = setInterval(() => {
    //у нас есть время, которое обновляется каждую секунду
    setTime(new Date())
}, 1000);
    return()=>{
        //в момент завершения размонтируем счетчик
        clearInterval(timer);
    }
    // function Timer(info)   ['info'] -  в этом случае мы говорим, что 
    // если мы хотим, чтобы действие выполнилось в момент монтирования, то вторым аргументом ничего не передаем
    // если мы хотим, чтобы оно у нас отработало в момент монтирования и обновления (в этой задаче самое важное - это обновление) - оставляем квадратные скобочки пустыми - }, []) - вот так
    // если все зависит от пропсов , например от пропса info, то пишем так: function Timer({info})   ['info'] 
}, [])

    return (  
    <div>
        <p>Время {time.toLocaleTimeString()}</p>
    </div>
    );
}

export default Timer;