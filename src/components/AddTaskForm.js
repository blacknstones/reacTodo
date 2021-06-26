import React, { useState } from 'react';

const AddTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = e => {
    e.target.name === 'title'
      ? setTitle(e.target.value)
      : setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(
      { 
        id: Date.now(), 
        title, 
        description
      });
    setTitle('');
    setDescription('');
  };
  
  return (
    <form id='form' onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type='text'
        id='input__title'
        name='title'
        value={title}
        onChange={handleChange}
        required
      />
      <label>Description</label>
      <input
        type='text'
        id='input__desc'
        name='description'
        value={description}
        onChange={handleChange}
      />
      <input type='submit' id='button-add' value='Add' />
    </form>
  );
};

export default AddTaskForm;
