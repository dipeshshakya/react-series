import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

export const TodoList = ({ items, id, deleteItem, editItem }) => {
  return (
    <>
      <div
        className="container rounded-sm shadow-sm border-slate-500 p-4 hover:shadow-md mb-4 flex justify-between"
        key={id}
      >
        <p>{items}</p>
        <div className="flex">
          <FaPencilAlt className="mx-1" onClick={() => editItem(id)} />
          <FaTrash className="mx-1" onClick={() => deleteItem(id)} />
        </div>
      </div>
    </>
  );
};
