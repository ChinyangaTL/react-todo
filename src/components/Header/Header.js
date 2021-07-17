import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../../data';
import { uuid } from 'uuidv4';
import sun from '../../icons/icon-sun.svg';
import moon from '../../icons/icon-moon.svg';
import './Header.css';
import { useGlobalContext } from '../../context/context';

toast.configure();
const Header = () => {
  const { createTodo } = useGlobalContext();
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      toast.error('Cannot add empty value', toastOptions);
      return;
    }
    toast.success('Successfully added', toastOptions);
    const newTodo = {
      id: uuid(),
      title,
      active: true,
    };
    createTodo(newTodo);
    setTitle('');
  };
  return (
    <>
      <div className="header--top">
        <h1 className={``}>Todo</h1>
        <button className="btn">
          <img src={sun} alt="toggle-icon" />
        </button>
      </div>
      <div className=" list-item header--input">
        <form onSubmit={handleSubmit}>
          <div className="circle"></div>
          <input
            className=""
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Create a todo..."
          />
        </form>
      </div>
    </>
  );
};

export default Header;
