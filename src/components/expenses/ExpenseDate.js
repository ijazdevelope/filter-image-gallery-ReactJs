import React from 'react';

const ExpenseDate = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];

    return (
        <div className='date_container'>
            <p>{d.getMonth() + 1}</p>
            <p>{dayName}</p>
            <p>{d.getFullYear()}</p>
        </div>
    );
}

export default ExpenseDate;