import React from 'react';
import { useGlobalContext } from '../../context/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../../data';
import cross from '../../icons/icon-cross.svg';
import check from '../../icons/icon-check.svg';
import './ListItem.css';

toast.configure();
const ListItem = ({ id, title, active }) => {
  const { removeItem, toggleActive, emitToast } = useGlobalContext();

  const handleRemove = (id) => {
    toast.info(`Item removed`, toastOptions);
    removeItem(id);
  };

  const handleActiveToggle = (id) => {
    toast.dark(
      `${active ? 'Marked as complete' : 'Marked as active'}`,
      toastOptions
    );
    toggleActive(id);
  };
  return (
    <div className="list-item">
      <div className="list-item--left">
        <div
          className={`${active ? 'circle' : 'circle completed'}`}
          onClick={() => {
            handleActiveToggle(id);
          }}
        >
          {!active && <img src={check} alt="check" />}
        </div>
        <p className={`${active ? '' : 'completed'}`}>{title}</p>
      </div>
      <button className="btn" onClick={() => handleRemove(id)}>
        <img src={cross} alt="cross" />
      </button>
    </div>
  );
};

export default ListItem;
{
  /* <div className="header--input list-item">
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
      </div> */
}
