import React from 'react';

function TodoItem(props) {
    return (
        <li>
            <span className={`Icon Icon-check ${props.completed && 'Iconcheck-active'}`}>
                /
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p-completed'}`}>
                {props.text}
            </p>
            <span className='Icon Icon-delete'>
                X
            </span>
        </li>
    );
  }

  export default TodoItem;