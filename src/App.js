import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './css/main.css';

/* eslint-disable arrow-body-style */
const App = () => {
  return (
    <div className='App'>
      <Header />
      <TodoList/>
    </div>
  );
};

export default App;
