import { React, useState } from 'react';
import Form from './Form';
import { TodoList } from './TodoList';

export const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const handleSubmit = (e, props) => {
    e.preventDefault();
    console.log(e);
    setTodoItem([...todoItem, props]);
    e.target.reset();
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      {todoItem.map((item, key) => {
        return <TodoList id={key} items={item} />;
      })}
    </>
  );
};
