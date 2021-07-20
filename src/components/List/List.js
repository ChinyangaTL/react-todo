import React, { useState } from 'react';
import { useGlobalContext } from '../../context/context';
import { ToastContainer, toast } from 'react-toastify';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../../data';
import data from '../../data';
import ListItem from '../ListItem/ListItem';
import './List.css';
import { useEffect } from 'react';

toast.configure();
const List = () => {
  const {
    list,
    remaining,
    showAll,
    showActive,
    showCompleted,
    clearCompleted,
    handleFilter,
    updateTodoList,
  } = useGlobalContext();
  console.log(list);
  // const [todoList, updateTodoList] = useState(list);
  const [filtering, setFiltering] = useState([
    { id: 1, value: 'all', active: true },
    { id: 2, value: 'active', active: false },
    { id: 3, value: 'completed', active: false },
  ]);
  const [activeButton, setActiveButton] = useState(0);

  const handleClearCompleted = () => {
    clearCompleted();
    toast.dark('Completed Items Cleared', toastOptions);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTodoList(items);
  };

  const handleFilterToggle = (e) => {
    // setActiveButton('');
    if (e.target.textContent === 'All') {
      console.log(e.target.classList);
      setActiveButton(0);
      showAll();
    }
    if (e.target.textContent === 'Active') {
      console.log(e.target.classList);
      setActiveButton(1);

      showActive();
    }
    if (e.target.textContent === 'Completed') {
      console.log(e.target.classList);
      setActiveButton(2);

      showCompleted();
    }
  };

  // const { id, title, active } = list[activeButton];
  return (
    <div className="list-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list.length === 0 && (
                <p className="list--empty">No Items in List</p>
              )}
              {list.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ListItem {...item} />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="list-item list--footer">
        <p>{remaining} items left</p>
        <div className="btn-group">
          <button
          value='All'
            className={`${activeButton === 0 ? 'btn active' : 'btn'}`}
            onClick={(e) => handleFilterToggle(e)}
          >
            All
          </button>
          <button
          value='Active'
            className={`${activeButton === 1 ? 'btn active' : 'btn'}`}
            onClick={(e) => handleFilterToggle(e)}
          >
            Active
          </button>
          <button
          value='Completed'
            className={`${activeButton === 2 ? 'btn active' : 'btn'}`}
            onClick={(e) => handleFilterToggle(e)}
          >
            Completed
          </button>
        </div>
        <button className="btn" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default List;
