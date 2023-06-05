import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import '../expenses/ExpenseItems.css';
import ExpenseDate from '../expenses/ExpenseDate';
// import { Input } from '@mui/material';
import { globalState } from '../../App';


const ExpenseItems = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [newTitle, setNewTitle] = useState('');

  const { getDay } = useContext(globalState);
  
  // const changeHandler = (e) => {
  //   setNewTitle(e.target.value);
  // }

  // const clickHandler = (e) => {
  //   setTitle(newTitle);
  //   setNewTitle('');
  // }

  return (
    <div className='expense-item'>
      <div className='expense-paragraph'>
        <ExpenseDate />
        {props.day}
        <h4>{props.title}</h4>
      </div>
      <div className="expenst-desc">
        <Button
          size="large"
          className='price'
          variant="contained" >
          ${props.price}
        </Button>

        {/* <Input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          id="my-input"
          placeholder='Change Title...'
          type='text'
          aria-describedby="my-helper-text" /> */}

        {/* <Button
          size="small"
          color='success'
          disabled={newTitle.trim() === '' ? true : false}
          variant="contained"
          className='value'
          onClick={clickHandler} >
          Change Value
        </Button> */}
      </div>
    </div>
  )
}

export default ExpenseItems;
