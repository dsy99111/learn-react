import React from 'react'

export default function Todo({todo,toggleTodo}) {
  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
        <font color="red">{todo.name} created Date: {todo.currdate} Created Time:{todo.currtime}</font> 
      <font color="green"><br/>&nbsp; &nbsp; Completed Date: {todo.completedate} Completed Time: {todo.completetime}
      </font>
      </label>
      
    </div>
  )
}

