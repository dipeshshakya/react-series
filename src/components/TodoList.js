import { React, useState } from 'react';
import {
  FaTrash,
  FaPencilAlt,
  FaRegCircle,
  FaRegCheckCircle,
} from 'react-icons/fa';

export const TodoList = ({ items, id, deleteItem, editItem }) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <>
      <div
        className="container rounded-sm shadow-sm border-slate-500 p-4 hover:shadow-md mb-4 flex justify-between"
        key={id}
      >
        <div className="flex items-center justify-evenly">
          {!isComplete ? (
            <FaRegCircle onClick={() => setIsComplete(true)} />
          ) : (
            <FaRegCheckCircle />
          )}

          <p
            style={{
              textDecoration: isComplete && 'line-through',
              textDecorationColor: isComplete && 'grey',
            }}
          >
            {items}
          </p>
        </div>
        <div className="flex">
          <FaPencilAlt className="mx-1" onClick={() => editItem(id)} />
          <FaTrash className="mx-1" onClick={() => deleteItem(id)} />
        </div>
      </div>
    </>
  );
};
