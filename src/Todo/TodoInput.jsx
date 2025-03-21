import React from 'react'

function TodoInput() {
  return (
    <form className="todo-input-form">
      <input type="text" className="todo-text-input" placeholder='enter-task-title'/>
      <textarea placeholder='enter todo description'></textarea>
      <button className="submit-btn">Submit Todo</button>
    </form>
  )
}

export default TodoInput
