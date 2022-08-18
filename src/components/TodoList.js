import React from 'react';
import { FaTrash } from 'react-icons/fa';

export const TodoList = ({ items, id, deleteItem }) => {
  // console.log(items);
  return (
    <>
      <div
        className="container rounded-sm shadow-sm border-slate-500 p-4 hover:shadow-md mb-4 flex justify-between"
        id={id}
      >
        <p>{items}</p>
        <FaTrash onClick={() => deleteItem(id)} />
      </div>
    </>
  );
};
