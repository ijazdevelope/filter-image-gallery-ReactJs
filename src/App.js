import './App.css';
import React, { createContext } from 'react';
import Form from './components/my-form/Form';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router';
import Table from './components/table/Table';
import Filter from './components/filter-image-gallery/Filter';
import Header from './classComponents/Index';

export const globalState = createContext();

const App = () => {
  const [day, setDay] = React.useState(new Date(22 / 5 / 2020));

  // const getData = (obj) => {
  //   const expenseObj = {
  //     ...obj,
  //     id: Math.random().toString()
  //   }
  //   setData([...data, expenseObj]);
  // }
  const getColor = {
    color: '#2a2929',
  }

  const getDay = day => {
    setDay(day);
  }

  return (
    <globalState.Provider value={{ getColor, getDay }}>
      <Navbar />
      <div className='abc' style={{padding: '1rem'}}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table" element={<Table />} />
          <Route path="/gallery" element={<Filter />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </div>

      <div className="App">
        {/* <Form getData={getData} /> */}
        {/* <Expenses totalExpense={data} /> */}
      </div>
    </globalState.Provider>
  );
}

export default App;
