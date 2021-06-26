import React, { useState } from 'react';

const EditTaskForm = ({ title, description, onSubmit }) => {
  const [currTitle, setCurrTitle] = useState(title);
  const [currDescription, setCurrDescription] = useState(description);

  const handleChange = e => {
    e.target.name === 'title'
      ? setCurrTitle(e.target.value)
      : setCurrDescription(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      title: currTitle,
      description: currDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='todo__item__content'>
      <input
        type='text'
        className='title title-input'
        placeholder={currTitle}
        value={currTitle}
        name='title'
        onChange={handleChange}
      />
      <textarea
        className='desc desc-input'
        placeholder={currDescription}
        value={currDescription}
        name='description'
        onChange={handleChange}
      />
      <button type='submit' className='button-edit'>
        <i className='fas fa-check'></i>
      </button>
    </form>
  );
};

export default EditTaskForm;
