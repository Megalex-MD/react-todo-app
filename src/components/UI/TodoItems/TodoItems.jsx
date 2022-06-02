import React from 'react';
import CheckBox from '../CheckBox';
import cn from 'classnames';
import { BsTrashFill } from 'react-icons/bs'

const TodoItems = ({ todo, finishTodo, removeTodo }) => {

  return (
    <div className='w-4/5 m-auto mb-3 flex justify-between rounded-2xl bg-gray-800 p-5'
    >
      <button
        className='flex items-center w-full'
        onClick={() => finishTodo(todo.id)}
      >
        <span >
          <CheckBox isComplited={todo.isComplited} />
        </span>
        <span className={cn({ 'line-through': todo.isComplited })}>
          {todo.title}
        </span>
      </button>

      <button>
        <BsTrashFill
          size={24}
          onClick={() => removeTodo(todo.id)}
          className='text-gray-500 hover:text-red-500 transition-colors duration-300' />
      </button>
    </div>
  );
};

export default TodoItems;