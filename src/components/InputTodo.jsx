/* eslint-disable react/prop-types */
import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." className="input-text" value={title} onChange={handleChange} />
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
