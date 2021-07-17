import React, { useContext, useEffect, useReducer } from 'react';
import {
  REMOVE_ITEM,
  EMIT_TOAST,
  TOGGLE_ACTIVE,
  SHOW_ACTIVE,
  CREATE_TODO,
  CLEAR_COMPLETED,
  SHOW_COMPLETED,
  SHOW_ALL,
  SHOW_REMAINING,
  UPDATE_TODO,
  HANDLE_FILTER,
} from '../constants/actionTypes';
import _ from 'lodash';
import data from '../data';
import reducer from '../reducers/reducer';
const AppContext = React.createContext();

const getLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  if (todos) {
    console.log('todos returned');
    return (todos = JSON.parse(localStorage.getItem('todos')));
  }
  return data;
};

const initialState = {
  list: getLocalStorage(),
  remaining: 0,
};

let allTodos = _.cloneDeep(initialState.list);

initialState.allTodos = allTodos;

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // ! HEADER ACTIONS
  const createTodo = (todo) => {
    dispatch({ type: CREATE_TODO, payload: todo });
  };

  // ! LIST ITEM ACTIONS
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const toggleActive = (id) => {
    dispatch({ type: TOGGLE_ACTIVE, payload: id });
  };

  // ! LIST ACTIONS
  const showAll = () => {
    dispatch({ type: SHOW_ALL });
  };

  const showActive = () => {
    dispatch({ type: SHOW_ACTIVE });
  };

  const handleFilter = (filterType) => {
    dispatch({ type: HANDLE_FILTER, payload: filterType });
  };

  const showCompleted = () => {
    dispatch({ type: SHOW_COMPLETED });
  };

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  const emitToast = (options) => {
    dispatch({ type: EMIT_TOAST, payload: options });
  };

  const updateTodoList = (list) => {
    dispatch({ type: UPDATE_TODO, payload: list });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.list));
  }, [state.list]);

  useEffect(() => {
    dispatch({ type: SHOW_REMAINING });
  }, [state.remaining]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        toggleActive,
        showAll,
        showActive,
        showCompleted,
        clearCompleted,
        createTodo,
        emitToast,
        updateTodoList,
        handleFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
