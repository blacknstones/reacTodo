import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';

const TodoCard = ({ task, removeTask, editTask }) => {
  const { id, title, description } = task;
  const [currTitle, setCurrTitle] = useState(title);
  const [currDescription, setCurrDescription] = useState(description);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = () => {
    if (isEditing) {
      setIsCompleted(false);
      return;
    } 
    setIsCompleted(!isCompleted);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onRemoveTask = () => {
    removeTask(id);
  };

  const onSubmit = data => {
    editTask({
      id, 
      title: data.title,
      description: data.description
    });
    setCurrTitle(data.title);
    setCurrDescription(data.description);
    setIsEditing(false);
  };

  return (
    <li
      className={`todo__item ${
        isCompleted && !isEditing ? 'todo__item-completed' : ''
      }`}
      onClick={toggleComplete}>
      {isEditing ? (
        <EditTaskForm title={currTitle} description={currDescription} onSubmit={data => onSubmit(data)}/>
      ) : (
        <div className='todo__item__content'>
          <p className='title'>{currTitle}</p>
          <pre className='desc'>{currDescription}</pre>
        </div>
      )}

      {!isCompleted && !isEditing && (
        <button className='button-edit' onClick={toggleEdit}>
          <i className='far fa-edit'></i>
        </button>
      )}

      {isCompleted && !isEditing && (
        <button className='button-remove' onClick={onRemoveTask}>
          Remove
        </button>
      )}
    </li>
  );
};

export default TodoCard;
