import React from 'react'

function TodoItem({title, description, complete}) {
  return (
    <div className='todo-item'>
      <h3 className={complete ? 'todo-title complete' : 'todo-title'} >{title}</h3>
      <p className={complete ? `complete` : ``}>{description}</p>
      
      
    </div>
  )
}

export default TodoItem
