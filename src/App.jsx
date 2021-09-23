import { Children, useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./components/Todo";
// import classes from './styles/App.module.css';

const App = () => {
  // let inputValue = "";
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([]);a
  // const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([]);

  const updateInput = event => {
    // console.log(event);
    const val = event.target.value;
    setInputValue(val);
  }

  // useEffect(() => {
  //   // klgelglkn
  //   document.addEventListener("click");

  //   return () => {
  //     // unmount
  //     document.removeEventListener("click")
  //   }
  // }, [])

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
  }

  // React.createElement('h1', { class: });

  return <>
    <StyledHeading>Todo things <span>OK</span></StyledHeading>
    <input onChange={updateInput} />
    <button onClick={handleAddTodo}>Submit</button>
    <h3>Your latest todo: </h3>
    {Children.toArray(todos.map((todo) => {
      return <Todo value={inputValue}>{todo}</Todo>
    }))}
  </>;
} 

export default App;

const StyledHeading = styled.h2`
  display: flex;
  font-weight: 700; 

  &:hover {
    color: blue;
  }

  span {
    font-size: 4rem;
  }
`;