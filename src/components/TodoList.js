import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
export const TodoList = ({ items, id, deleteItem }) => {
  return (
    <>
      <div
        className="container flex justify-between rounded-sm shadow-sm border-slate-500 p-4 hover:shadow-md mb-4"
        key={id}
      >
        <p>{items}</p>

        <div className="flex">
          {/* <FaPencilAlt className="mx-1" onClick={} /> */}
          <FaTrash className="mx-1" onClick={() => deleteItem(id)} />
        </div>
      </div>
    </>
  );
};
