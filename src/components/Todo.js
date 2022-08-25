import { React, useReducer } from 'react';
import Form from './Form';
import { TodoList } from './TodoList';
import { reducer } from '../TodoReducer';
const initialState = {
  loading: 'false',
  data: ['this is the first todo', 'this is the second todo'],
};

export const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e, props) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: props });
  };
  const deleteItem = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      {state.data.map((item, key) => {
        return <TodoList id={key} items={item} deleteItem={deleteItem} />;
      })}
    </>
  );
};
