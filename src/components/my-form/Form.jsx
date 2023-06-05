import React, { useContext, useEffect, useState } from 'react';
import { globalState } from '../../App';
import Expenses from '../expenses/Expenses';
import './Form.css';
import Button from '../custom-button/Button';


const Form = (props) => {
    const { getDay } = useContext(globalState);
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [data, setData] = React.useState([]);


    useEffect(() => {
        // getDay(date.getMonth());
    }, [date, getDay]);

    const enteredTiltle = e => setTitle(e.target.value);
    const enteredPrice = e => setPrice(e.target.value);
    const enteredDate = e => setDate(e.target.value);

    const handlerSubmit = e => {

        e.preventDefault();
        const expense = {
            date,
            title,
            price
        }
        console.log();
        setData([...data, expense]);
        setPrice('');
        setTitle('');
        props.getData(expense);
    }


    return (
        <>
            <h2 className='my__expenses'>My Daily Expenses </h2>
            <form onSubmit={handlerSubmit} className='form__container'>
                <div className='expense-form__desc'>
                    <label htmlFor="title">Title</label>
                    <input onChange={enteredTiltle} value={title} type='text' id='title' placeholder='Title....' />
                </div>
                <div className='expense-form__desc'>
                    <label htmlFor="price">Price</label>
                    <input onChange={enteredPrice} value={price} type='number' id='price' placeholder='Price....' />
                </div>
                <div className='expense-form__desc'>
                    <label htmlFor="date">Date</label>
                    <input onChange={enteredDate} value={date} type='date' id='date' placeholder='Date....' />
                </div>
                <div className='expense-form__desc'>
                    <label htmlFor="submit"></label>
                    {/* <input type='submit' id='submit' value='Submit' /> */}
                    <Button type='submit' className='btn btn-primary'> submit  </Button>
                </div>
            </form>

            <Expenses totalExpense={data} />
        </>
    )
}

export default Form
