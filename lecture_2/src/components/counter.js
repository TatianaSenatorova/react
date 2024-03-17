import{useState} from 'react';

function Counter() {
    //компоненты могут не только
// отображать переданные им статические данные, но и инкапсулировать некоторую
// логику. Это достигается, в том числе, за счет использования переменных состояния,
// или стейта. Стейт (state) - специальная переменная, сохраняющая переданное ей
// значение внутри компонента
const [count, setCount] = useState(0);
// создадим отдельную функцию upddatecount
const updateCount =() => {
setCount(count + 2);
}

    return ( 
<div>
    <span>{count}</span>
       <button onClick={updateCount}>click +2</button>
</div>

     );
}

export default Counter;