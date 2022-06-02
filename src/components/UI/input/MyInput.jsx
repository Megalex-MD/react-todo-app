import React from 'react';

const MyInput = (props) => {

  return (
    <input
      {...props}
      className='text-white w-4/5 m-auto mt-20 border-2 border-gray-600 rounded-lg 
      flex justify-between focus:outline-none bg-gray-600 py-3 px-5'
    />
  );
};

export default MyInput;