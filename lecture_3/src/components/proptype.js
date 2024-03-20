import React from 'react';
import PropTypes from 'prop-types';

//нас интересует проверка на типы
const Student = ({name, age, isStudent}) => {
return (
<div>
    <h2>{name}</h2>
    <p>Возраст: {age}</p>
    <p>{isStudent ? 'Студент' : 'Не студент'}</p>
</div>

)

};
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool,
};
export default Student;
//Теперь идеальная типизация
// Теперь можно не переживать, что нам с бэкэнда придут какие-то неправильные значения. 
