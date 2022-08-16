import { React, useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [value, setValue] = useState('');
  return (
    <div className="container mx-auto">
      <form action="" onSubmit={(e) => handleSubmit(e, value)}>
        <input
          type="text"
          placeholder="Enter your todos"
          className="w-full
        p-4
        mb-6
        hover:rounded-none
        hover:border-slate-500
        border border-slate-300
        clear-both focus:cursor-not-allowed"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
