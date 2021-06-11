import { useState } from 'react';
import './App.scss';
import ColorBox from './components/colorBox/colorBox';
import TodoList from './components/todoList/todolList';
import TodoForm from './components/todoForm/todoForm';

function App() {
  const [toDoList, setToDoList] = useState([
    {id:1, title: "This is real my love"},
    {id:2, title: "You never known i like you"},
    {id:3, title: "Song trong doi song can co mot tam chong"},
    {id:4, title: "De lam gi hong biet luon"}
  ]);

function removeClick(todo) {
  let item = toDoList.findIndex(x => x.id === todo.id);
  const newTodoList = [...toDoList];
  newTodoList.splice(item,1);
  setToDoList(newTodoList);
}


function handleOnSubmit(newInput) {
  const newTodoList = [...toDoList];
  const item = {
    ...newInput
  }
  newTodoList.push(newInput);
  setToDoList(newTodoList)
}

  return (
    <div className="App">
      <TodoForm onSubmit={handleOnSubmit} />
      <TodoList todos={toDoList} onToDoClick={(todo) => removeClick(todo)}/>
    </div>
  );
}

export default App;
