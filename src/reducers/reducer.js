import {
  CLEAR_COMPLETED,
  CREATE_TODO,
  HANDLE_FILTER,
  REMOVE_ITEM,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_REMAINING,
  TOGGLE_ACTIVE,
  TOGGLE_THEME,
  UPDATE_TODO,
} from '../constants/actionTypes';
import _ from 'lodash';

const reducer = (state, action) => {
  // ! HEADER ACTIONS
  if (action.type === CREATE_TODO) {
    localStorage.setItem(
      'todos',
      JSON.stringify([...state.list, action.payload])
    );
    return {
      ...state,
      list: [...state.list, action.payload],
      remaining: state.remaining + 1,
    };
  }

  // ! LIST ITEM ACTIONS
  if (action.type === REMOVE_ITEM) {
    const newItems = state.list.filter(
      (listItem) => listItem.id !== action.payload
    );
    return { ...state, list: newItems, allTodos:newItems, remaining: newItems.length };
  }

  if (action.type === TOGGLE_ACTIVE) {
    let tempList = state.list.map((listItem) => {
      if (listItem.id === action.payload) {
        const itemActive = listItem.active;
        return { ...listItem, active: !itemActive };
      }
      return listItem;
    });
    return { ...state, list: tempList, remaining: state.remaining - 1 };
  }

  // ! LIST ACTIONS
  if (action.type === SHOW_REMAINING) {
    const activeItemsLength = state.list.filter(
      (listItem) => listItem.active === true
    ).length;
    return { ...state, remaining: activeItemsLength };
  }

  if (action.type === HANDLE_FILTER) {
    if (action.payload === 'Active') {
      return {
        ...state,
        list: state.list.filter((listItem) => listItem.active),
      };
    }
    if (action.payload === 'Completed') {
      return {
        ...state,
        list: state.list.filter((listItem) => !listItem.active),
      };
    }
    return { ...state, list: state.allTodos };
  }

  if (action.type === SHOW_ALL) {
    console.log(state);
    return { ...state, list: state.allTodos };
  }

  if (action.type === SHOW_ACTIVE) {
    const activeItems = state.list.filter(
      (listItem) => listItem.active === true
    );
    console.log('active clicked');

    return { ...state, list: activeItems };
  }

  if (action.type === SHOW_COMPLETED) {
    const completedItems = state.list.filter(
      (listItem) => listItem.active === false
    );
    console.log('completed clicked');

    return { ...state, list: completedItems };
  }

  if (action.type === CLEAR_COMPLETED) {
    const incompleteItems = state.list.filter(
      (listItem) => listItem.active === true
    );
    return { ...state, list: incompleteItems };
  }

  if (action.type === UPDATE_TODO) {
    return { ...state, list: action.payload };
  }

  if(action.type === TOGGLE_THEME) {
    if(state.theme === 'light-theme') {
      return {...state, theme: 'dark-theme'}

    }
    if(state.theme === 'dark-theme') {
      return {...state, theme: 'light-theme'}
      
    }
  }
  return state;
};

export default reducer;
