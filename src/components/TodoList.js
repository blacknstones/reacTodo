import React, { useEffect, useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const onSubmit = newTask => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = id => {
    const newTasks = tasks.filter(el => el.id !== id);
    setTasks(newTasks);
  };

  const editTask = newTask => {
    let newTasks = tasks;
    const index = tasks.findIndex(el => el.id === newTask.id);
    newTasks[index] = newTask;
    setTasks(newTasks);

  };

  useEffect(() => {
    console.log('tasks', tasks);
  }, [tasks]);

  return (
    <main>
      <AddTaskForm onSubmit={data => onSubmit(data)} />
      <ul className='todo'>
        {tasks.map(task => (
          <TodoCard key={task.id} task={task} removeTask={removeTask} editTask={editTask}/>
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
