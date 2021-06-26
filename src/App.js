import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import '../src/css/main.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <TodoList/>
    </div>
  );
};

export default App;
