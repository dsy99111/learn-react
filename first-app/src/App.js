import './App.css';
import TodoList from './TodoList';
import { useState, useRef, useEffect } from 'react';
import * as uuid from "uuid" // import uuidv4 from ‘uuid/v4’
import DateTime from './DateTime'; 

function App() {
 
  const todoNameRef=useRef()
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id === id)
    todo.complete =!todo.complete
    todo.completedate=new Date().toLocaleDateString()
    todo.completetime=new Date().toLocaleTimeString()
    settodos(newTodos)
  }
  
  function handleClearTodo(){
    const newTodos=todos.filter(todo=>!todo.complete)
    settodos(newTodos)
  }
function handleAddTodo(e){
  const name=todoNameRef.current.value
  if(!name ) {
    alert("name description cannot be blank");
}
else {
  const myTodo={
    id:uuid.v4(),    //npm I uuid
    name:name,
    complete:false,
    currdate:new Date().toLocaleDateString(),
    currtime:new Date().toLocaleTimeString(),
    completedate:"",
    completetime:""
  }
  settodos([...todos,myTodo]);
  
    todoNameRef.current.value=null
}
}
const [todos,settodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
  <><div><DateTime></DateTime></div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <label >Todo Description</label>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo} >Add todo </button>{"  "}
      <button onClick={handleClearTodo} > Clear completed</button>
      <div>{todos.filter(todo=>!todo.complete).length} left to do</div>
  </>
    
);
  
}

export default App;
