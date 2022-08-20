import { React, useState, useRef } from 'react';
import Form from './Form';
import { TodoList } from './TodoList';

export const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itemId, setItemId] = useState(null);
  const itemEls = useRef([]);
  itemEls.current = [];

  const handleSubmit = (e, props) => {
    e.preventDefault();

    if (!isEditing) {
      setTodoItem([...todoItem, props]);
    } else {
      const newTodoItem = [...todoItem];
      newTodoItem[itemId] = props;
      setTodoItem(newTodoItem);
    }
    console.log(todoItem);
    setIsEditing(false);
    e.target.reset();
  };

  const deleteItem = (id) => {
    const newtodoItem = todoItem.filter((item, index) => index !== id);
    setTodoItem(newtodoItem);
  };

  const editItem = (id) => {
    setItemId(id);
    setIsEditing(true);
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} isEditing={isEditing} />
      {!isEditing &&
        todoItem.map((item, key) => {
          return (
            <TodoList
              id={key}
              items={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
    </>
  );
};
