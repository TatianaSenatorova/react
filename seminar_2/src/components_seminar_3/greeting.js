import React from 'react';

// Создайте функциональный компонент Greeting, который принимает проп name и отображает сообщение Привет, {name}!.
// Используйте компонент Greeting в вашем основном компоненте App, передавая разные имена в качестве пропсов.

function Greeting({userName}) {
    return ( 
<>
    <p>
        Привет, {userName}
    </p>
</>

     );
}

export default Greeting;