import React, { useEffect, useState } from 'react';
import EditTaskForm from './EditTaskForm';

const TodoCard = ({ task, removeTask, editTask }) => {
  const { id, title, description } = task;
  const [currTitle, setCurrTitle] = useState(title);
  const [currDescription, setCurrDescription] = useState(description);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = () => {
    isEditing ? setIsCompleted(false) : setIsCompleted(!isCompleted);
  };

  const onEditTask = () => {
    setIsCompleted(false);
    setIsEditing(true);
  };

  const onRemoveTask = () => {
    removeTask(id);
  };

  const onSubmit = data => {
    editTask({
      id,
      title: data.title,
      description: data.description,
    });
    setCurrTitle(data.title);
    setCurrDescription(data.description);
    setIsEditing(false);
  };

  useEffect(() => {
    console.log('iscompleted', isCompleted);
  }, [isCompleted]);

  useEffect(() => {
    console.log('isEditing', isEditing);
  }, [isEditing]);
  return (
    <li
      className={`todo__item ${
        isCompleted && !isEditing ? 'todo__item-completed' : ''
      }`}
      onClick={toggleComplete}>
        
      {isEditing ? (
        <EditTaskForm
          title={currTitle}
          description={currDescription}
          onSubmit={data => onSubmit(data)} />
      ) : (
        <div className='todo__item__content'>
          <p className='title'>{currTitle}</p>
          <pre className='desc'>{currDescription}</pre>
        </div>
      )}

      {!isCompleted && !isEditing && (
        <button className='button-edit' onClick={onEditTask}>
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
