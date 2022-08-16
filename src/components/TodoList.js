import React from 'react';

export const TodoList = ({ items, id }) => {
  // console.log(items);
  return (
    <>
      <div
        className="container rounded-sm shadow-sm border-slate-500 p-4 hover:shadow-md mb-4"
        id={id}
      >
        <p>{items}</p>
      </div>
    </>
  );
};
